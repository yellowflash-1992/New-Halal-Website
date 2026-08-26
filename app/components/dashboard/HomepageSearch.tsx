"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  POPULAR_SEARCH_TAGS,
  SEARCH_CATEGORIES,
  SEARCH_INDEX,
  SearchCategory,
  SearchItem,
} from "../../data/searchData";

interface HomepageSearchProps {
  darkMode: boolean;
}

export default function HomepageSearch({ darkMode }: HomepageSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<SearchCategory>("All");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const desktopInputRef = useRef<HTMLInputElement>(null);
  const modalInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsListRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Filter search items based on query & category
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return SEARCH_INDEX.filter((item) => {
      // Category filter match
      const categoryMatch =
        selectedCategory === "All" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!categoryMatch) return false;

      // Query filter match
      if (!trimmed) return true;

      const inTitle = item.title.toLowerCase().includes(trimmed);
      const inDesc = item.description.toLowerCase().includes(trimmed);
      const inKeywords = item.keywords.some((kw) =>
        kw.toLowerCase().includes(trimmed),
      );
      const inBadge = item.badge.toLowerCase().includes(trimmed);

      return inTitle || inDesc || inKeywords || inBadge;
    });
  }, [query, selectedCategory]);

  // Reset highlight index when results change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [filteredResults]);

  // Listen for custom event triggered elsewhere on the homepage (e.g., hero search button)
  useEffect(() => {
    function handleOpenEvent() {
      setIsOpen(true);
      setTimeout(() => {
        modalInputRef.current?.focus();
        desktopInputRef.current?.focus();
      }, 60);
    }

    window.addEventListener("open-hfs-search", handleOpenEvent);
    return () => window.removeEventListener("open-hfs-search", handleOpenEvent);
  }, []);

  // Global Keyboard shortcuts: '/' or 'Cmd+K' / 'Ctrl+K' to open, 'Escape' to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // If user presses Escape
      if (e.key === "Escape") {
        setIsOpen(false);
        desktopInputRef.current?.blur();
        return;
      }

      // Ignore if user is currently typing in an input/textarea/editable
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // Shortcut: '/' or 'Cmd+K' / 'Ctrl+K'
      if (
        (e.key === "/" && !isInput) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          modalInputRef.current?.focus();
          desktopInputRef.current?.focus();
        }, 50);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close when clicking outside on desktop
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Auto focus mobile input when overlay opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        modalInputRef.current?.focus();
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll on mobile overlay when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("hfs-search-modal-open");
    } else {
      document.body.classList.remove("hfs-search-modal-open");
    }
    return () => {
      document.body.classList.remove("hfs-search-modal-open");
    };
  }, [isOpen]);

  function handleSelectResult(item: SearchItem) {
    setIsOpen(false);
    setQuery("");
    router.push(item.url);
  }

  function handleKeyDownNav(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredResults.length - 1,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredResults.length) {
        handleSelectResult(filteredResults[highlightedIndex]);
      } else if (filteredResults.length > 0) {
        handleSelectResult(filteredResults[0]);
      }
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && resultsListRef.current) {
      const items = resultsListRef.current.querySelectorAll(
        ".hfs-search-result-item",
      );
      const currentItem = items[highlightedIndex] as HTMLElement;
      if (currentItem) {
        currentItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex]);

  // Helper to highlight matching text
  function renderHighlightedText(text: string, highlight: string) {
    if (!highlight.trim()) return text;
    const regex = new RegExp(
      `(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="hfs-search-match">
              {part}
            </mark>
          ) : (
            part
          ),
        )}
      </>
    );
  }

  return (
    <div className="hfs-search-wrapper" ref={containerRef}>
      {/* 1. Desktop Inline Search Bar (Visible on >= 861px) */}
      <div className={`hfs-search-desktop${isOpen ? " is-focused" : ""}`}>
        <div className="hfs-search-input-box">
          <svg
            className="hfs-search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={desktopInputRef}
            type="search"
            className="hfs-search-input"
            placeholder="Search workouts, recipes, stories..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDownNav}
            aria-label="Search workouts, recipes, and resources"
            aria-expanded={isOpen}
            aria-controls="hfs-search-dropdown-list"
            autoComplete="off"
            spellCheck="false"
          />

          {query ? (
            <button
              type="button"
              className="hfs-search-clear-btn"
              onClick={() => {
                setQuery("");
                desktopInputRef.current?.focus();
              }}
              aria-label="Clear search input"
            >
              ✕
            </button>
          ) : (
            <kbd
              className="hfs-search-shortcut"
              title="Press '/' or Cmd+K to search"
            >
              /
            </kbd>
          )}
        </div>
      </div>

      {/* 2. Mobile Search Trigger Button (Visible on <= 860px) */}
      <button
        type="button"
        className="hfs-search-mobile-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
        aria-expanded={isOpen}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {/* 3. Search Results Dropdown / Modal Overlay */}
      {isOpen && (
        <div className="hfs-search-overlay-backdrop">
          <div
            className={`hfs-search-panel ${darkMode ? "dark-theme" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Site Search"
          >
            {/* Mobile-only header inside overlay */}
            <div className="hfs-search-panel-top">
              <div className="hfs-search-modal-input-wrap">
                <svg
                  className="hfs-search-modal-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input
                  ref={modalInputRef}
                  type="search"
                  className="hfs-search-modal-input"
                  placeholder="Search workouts, recipes, stories, guides..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDownNav}
                  aria-label="Search content"
                  autoComplete="off"
                  spellCheck="false"
                />

                {query && (
                  <button
                    type="button"
                    className="hfs-search-modal-clear"
                    onClick={() => {
                      setQuery("");
                      modalInputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                type="button"
                className="hfs-search-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
              >
                Done
              </button>
            </div>

            {/* Category Filter Pills */}
            <div
              className="hfs-search-categories"
              role="tablist"
              aria-label="Search Categories"
            >
              {SEARCH_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`hfs-search-cat-pill${selectedCategory === cat ? " is-active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "All" ? "✨ All" : cat}
                </button>
              ))}
            </div>

            {/* Popular Quick Suggestions (shown when query is empty or short) */}
            {!query && (
              <div className="hfs-search-quick-tags">
                <span className="hfs-search-quick-label">
                  Popular searches:
                </span>
                <div className="hfs-search-tag-list">
                  {POPULAR_SEARCH_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="hfs-search-tag-btn"
                      onClick={() => {
                        setQuery(tag);
                        modalInputRef.current?.focus();
                        desktopInputRef.current?.focus();
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Count Summary */}
            <div className="hfs-search-summary">
              {query ? (
                <span>
                  Found <strong>{filteredResults.length}</strong>{" "}
                  {filteredResults.length === 1 ? "result" : "results"} for
                  &ldquo;{query}&rdquo;
                </span>
              ) : (
                <span>
                  Browse top halal fitness resources ({filteredResults.length})
                </span>
              )}
            </div>

            {/* Results List */}
            <ul
              id="hfs-search-dropdown-list"
              className="hfs-search-results-list"
              ref={resultsListRef}
              role="listbox"
            >
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => {
                  const isHighlighted = highlightedIndex === index;
                  return (
                    <li
                      key={item.id}
                      role="option"
                      aria-selected={isHighlighted}
                      className={`hfs-search-result-item${isHighlighted ? " is-highlighted" : ""}`}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <div
                        className="hfs-search-item-icon-box"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>

                      <div className="hfs-search-item-info">
                        <div className="hfs-search-item-header">
                          <span className="hfs-search-item-title">
                            {renderHighlightedText(item.title, query)}
                          </span>
                          <span className="hfs-search-item-badge">
                            {item.badge}
                          </span>
                        </div>
                        <p className="hfs-search-item-desc">
                          {renderHighlightedText(item.description, query)}
                        </p>
                      </div>

                      <div className="hfs-search-item-arrow" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="hfs-search-empty-state">
                  <span className="hfs-search-empty-icon">🌸</span>
                  <p className="hfs-search-empty-title">
                    No matching results found
                  </p>
                  <p className="hfs-search-empty-desc">
                    Try searching for terms like &ldquo;Ramadan&rdquo;,
                    &ldquo;Suhoor&rdquo;, &ldquo;Postpartum&rdquo;, or
                    &ldquo;Smoothie&rdquo;.
                  </p>
                </li>
              )}
            </ul>

            {/* Desktop footer keyboard hints */}
            <div className="hfs-search-footer-hint">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> Navigate
              </span>
              <span>
                <kbd>↵</kbd> Open
              </span>
              <span>
                <kbd>ESC</kbd> Close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

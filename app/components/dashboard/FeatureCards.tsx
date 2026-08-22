import FeatureCard from "./FeatureCard";

export default function FeatureCards() {
  return (
    <section className="features container" id="programs" aria-label="What we offer">
      <FeatureCard
        icon={
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 6.5 17.5 17.5" />
            <rect x="1.5" y="8.5" width="3.5" height="7" rx="1" />
            <rect x="3.5" y="6.5" width="3.5" height="11" rx="1" />
            <rect x="17" y="6.5" width="3.5" height="11" rx="1" />
            <rect x="19" y="8.5" width="3.5" height="7" rx="1" />
          </svg>
        }
        title="Workout Programs"
        text="Customized fitness plans for all levels"
      />
      <FeatureCard
        icon={
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11h18a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7Z" />
            <path d="M6 18.5h12" />
            <circle cx="9" cy="7" r="1.4" />
            <circle cx="13" cy="6" r="1.4" />
            <circle cx="12" cy="9" r="1.2" />
          </svg>
        }
        title="Healthy Recipes"
        text="Nutritious and delicious halal meals"
      />
      <FeatureCard
        icon={
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
          >
            <path
              d="M12 20s-6.5-4.35-9-8.28C1.2 8.9 2.5 5.8 5.4 5.8c1.7 0 2.9 1 3.6 2 .3.4.7.4 1 0 .7-1 1.9-2 3.6-2 2.9 0 4.2 3.1 2.4 5.92C18.5 15.65 12 20 12 20Z"
              opacity=".95"
            />
          </svg>
        }
        title="Supportive Community"
        text="Connect with like-minded sisters"
      />
    </section>
  );
}
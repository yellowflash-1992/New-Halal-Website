import { getAssetPath } from "../../helpers/assetHelper";

export default function DecorativeLeaves() {
  return (
    <>
      <img
        src={getAssetPath("/leaves.png")}
        alt=""
        className="leaf leaf--bottom-left"
        aria-hidden="true"
      />
      <img
        src={getAssetPath("/leaves.png")}
        alt=""
        className="leaf leaf--bottom-right"
        aria-hidden="true"
      />
    </>
  );
}
import propTypes from "prop-types";
function HomeSectionCard(props) {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black">
        <div className="h-[13rem] w-[10rem]">
          <img
            className="object-cover object-top h-full w-full"
            src={props.item.imageUrl}
            alt="men shirts"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            {props.item.brand}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{props.item.title}</p>
        </div>
      </div>
    </>
  );
}
HomeSectionCard.propTypes = {
  item: propTypes.object,
};
export default HomeSectionCard;

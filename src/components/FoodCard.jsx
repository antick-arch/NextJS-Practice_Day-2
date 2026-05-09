import Image from "next/image";

const FoodCard = ({food}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image src={food.image_link} alt={food.dish_name} width={100} height={100}>
                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food.dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
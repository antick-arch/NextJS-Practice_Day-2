import FoodCard from "@/components/FoodCard";

const FoodPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;
    return (
        <div className="container mx-auto mt-10">

            <div className="grid grid-cols-4 gap-10">
                {
                    foods.map((food) => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodPage;
import Input from "../../ui/Input";

function MealItemForm(props) {
  return (
    <form className="mr-2 flex items-center gap-2">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-orange-700 text-white capitalize font-semibold p-2 px-3">
        add
      </button>
    </form>
  );
}

export default MealItemForm;

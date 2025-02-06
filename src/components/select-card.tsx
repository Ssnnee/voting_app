interface SelectCardProps {
  missPictureUrd: string
  missFirstName: string
  missLastName: string
};
export function SelectCard(
  { missPictureUrd, missFirstName, missLastName }: SelectCardProps
) {
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <img
        src={missPictureUrd}
        alt="Photo de la miss nom"
        width={300}
        height={200}
        className="border rounded shadow-current"
      />
      <p> {missLastName} </p>
      <p> {missFirstName} </p>
    </div>
  );
}

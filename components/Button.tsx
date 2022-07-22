interface Props {
  name: string;
  classNames: string;
  onClick: () => void;
}

export const Button = ({ name, classNames, onClick }) => (
  <button onClick={onClick} className={`text-sm" px-3 text-sm text-white ${classNames}`}>
    {name}
  </button>
);

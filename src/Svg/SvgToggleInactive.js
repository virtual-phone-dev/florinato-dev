export default function SvgToggleInactive() {
    return (
      <>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35px"
      cursor="pointer"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="M7 15a3 3 0 110-6 3 3 0 010 6z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M24 12a7 7 0 00-7-7H7a7 7 0 000 14h10a7 7 0 007-7zm-7-5H7a5 5 0 000 10h10a5 5 0 000-10z"
        clipRule="evenodd"
      ></path>
    </svg>
    </>
  );
}
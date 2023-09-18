function Avatar() {
  return (
    <svg
      className="absolute top-0 bottom-0 left-0 my-auto group-hover:fill-orange group-hover:stroke-none"
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000000"
      fill="none"
    >
      <circle cx="32" cy="18.14" r="11.14" />
      <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
    </svg>
  );
}

export default Avatar;

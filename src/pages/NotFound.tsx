import ErrorPage from "./Error";

export default function NotFoundErrorPage() {
  return (
    <ErrorPage
      Image={NotFoundImage}
      title="Trang không tìm thấy :("
      descriptions={[
        "Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.",
        "Vui lòng thử lại sau hoặc liên hệ với bộ phận hỗ trợ nếu sự cố vẫn tiếp diễn.",
      ]}
    />
  );
}

function NotFoundImage() {
  return (
    <svg
      width="340"
      height="340"
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="340" height="340" fill="url(#pattern0_1638_19971)" />
      <defs>
        <pattern
          id="pattern0_1638_19971"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1638_19971" transform="scale(0.002)" />
        </pattern>
      </defs>
    </svg>
  );
}

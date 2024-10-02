export default function Skeleton() {
  const getRandomWidth = () =>
    `${Math.floor(Math.random() * (100 - 30 + 1) + 30)}%`;

  return (
    <div className="space-y-4 pt-2 px-4 animate-pulse">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="h-4 bg-secondary rounded-lg"
            style={{ width: getRandomWidth() }}
          ></div>
        ))}
    </div>
  );
}

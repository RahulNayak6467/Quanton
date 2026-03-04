function LatestNews({ index, data }) {
  const timeAgo = (dateStr) => {
    const formatted = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}T${dateStr.slice(9, 11)}:${dateStr.slice(11, 13)}:${dateStr.slice(13, 15)}`;
    const date = new Date(formatted);
    const now = new Date(); // use new Date() instead of Date.now()
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${seconds}s ago`;
  };
  console.log(timeAgo("20260304T145249"));
  console.log(typeof 4);
  console.log(typeof data?.time_published);
  return (
    <div className="text-text-primary  border-b border-b-[#21262D] hover:bg-[#161B22] cursor-pointer py-3">
      <a
        href={data.url}
        target="blank"
        className="flex justify-between items-center "
      >
        <div className="text-text-secondary text-left w-[92%] text-[15px] leading-6 line-clamp-1">
          <span className="text-md">{index}.</span>
          <span className="ml-1">{data?.summary}</span>
        </div>
        <p className="text-sm "></p>
        <p className="mr-3 text-text-secondary">
          {timeAgo(String(data?.time_published))}
        </p>
      </a>
      <div>
        <span className="text-left text-sm text-text-secondary">
          {data.source} · {data.topics[0].topic}
        </span>
      </div>
    </div>
  );
}

export default LatestNews;

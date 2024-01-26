export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/4 bg-red-800"></div>
      <div className="w-full pt-20">{children}</div>
    </div>
  );
}

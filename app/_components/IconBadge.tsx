export default function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#50DFAE] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
      {children}
    </div>
  );
}

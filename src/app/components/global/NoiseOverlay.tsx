export default function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.02] mix-blend-soft-light overflow-hidden">
      <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-noise" />
    </div>

  );
}

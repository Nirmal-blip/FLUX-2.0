import Cursor from "@/components/Cursor";

export default function FluxLayout({ children }) {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
}

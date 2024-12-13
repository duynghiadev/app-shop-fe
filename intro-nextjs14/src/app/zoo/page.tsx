import Image from "next/image";

export default function Zoo() {
  return (
    <div>
      {["5", "2", "3", "4"].map((path: string) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpeg`}
              alt={`${path}`}
              width="280"
              height="420"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
        );
      })}
    </div>
  );
}

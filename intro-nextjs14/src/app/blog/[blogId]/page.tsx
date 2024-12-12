import { Metadata } from "next";

interface Props {
  params: {
    blogId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const nameBlog = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Blog duy nghia");
    }, 200);
  });

  return {
    title: {
      absolute: `Blog Detail - ${nameBlog}`,
    },
  };
};

export default function Index({ params }: Props) {
  console.log("params", { params });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Blog Page Detail {params.blogId}</h1>
      </div>
    </div>
  );
}

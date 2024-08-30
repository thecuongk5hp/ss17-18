// src/app/posts/page.tsx
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
};

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Accusamus beatae ad facilis",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    title: "Reprehenderit est deserunt",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    title: "Officia porro iure quia",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    title: "Culpa odio esse rerum omnis",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    id: 5,
    title: "Natus nisi omnis corporis",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    id: 6,
    title: "Accusamus ea aliquid et",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
];

export default function Posts() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.label,
      item: breadcrumb.href,
    })),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="flex justify-center text-3xl font-bold mb-6">
        Danh sách bài viết
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              width={150}
              height={150}
              layout="responsive"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
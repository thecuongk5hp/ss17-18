import Link from "next/link";
import Head from "next/head";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const lastIndex = breadcrumbs.length - 1;

  const breadcrumbList = breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.label,
    item: `${process.env.NEXT_PUBLIC_BASE_URL}${breadcrumb.href}`,
  }));

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="flex space-x-2 text-sm text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index !== lastIndex ? (
              <>
                <Link
                  href={breadcrumb.href}
                  className="text-blue-600 hover:underline"
                >
                  {breadcrumb.label}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbList,
          })}
        </script>
      </Head>
    </nav>
  );
}
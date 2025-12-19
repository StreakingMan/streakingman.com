"use client";

import Image from "next/image";
import { Cat, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

interface CatPhoto {
  name: string;
  image1?: string; // 第一张图（默认显示）
  image2?: string; // 第二张图（hover 时显示）
}

const cats: CatPhoto[] = [
  {
    name: "雕猫",
    image1: "/cats/diao-1.jpg",
    image2: "/cats/diao-2.jpg",
  },
  {
    name: "哦多茄",
    image1: "/cats/odoja-1.jpg",
    image2: "/cats/odaja-2.jpg",
  },
];

function CatCard({ cat }: { cat: CatPhoto }) {
  const hasImages = cat.image1 && cat.image2;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 圆形照片 */}
      <div className="group relative h-48 w-48 overflow-hidden rounded-full border-4 border-orange-500/20 transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 sm:h-56 sm:w-56">
        {hasImages ? (
          <>
            {/* 默认图片 */}
            <Image
              src={cat.image1!}
              alt={cat.name}
              fill
              sizes="224px"
              className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
            />
            {/* Hover 图片 */}
            <Image
              src={cat.image2!}
              alt={`${cat.name} - hover`}
              fill
              sizes="224px"
              className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
            />
          </>
        ) : (
          /* 占位图 */
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-muted/50 text-muted-foreground">
            <Cat className="h-16 w-16 opacity-30" />
            <Sparkles className="h-4 w-4 animate-pulse text-orange-500/50" />
          </div>
        )}
      </div>
      {/* 名字 */}
      <span className="text-lg font-medium">{cat.name}</span>
    </div>
  );
}

export function CatsSection() {
  return (
    <section className="relative py-20">
      {/* 猫脚印背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 text-4xl opacity-5">🐾</div>
        <div className="absolute right-20 top-40 text-3xl opacity-5">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-5">🐾</div>
        <div className="absolute bottom-40 right-1/3 text-4xl opacity-5">🐾</div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="我的猫" />

        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-8">
          {cats.map((cat) => (
            <CatCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

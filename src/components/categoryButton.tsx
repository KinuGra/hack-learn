import React, { useRef, useEffect, useState } from 'react';

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}

export function CategoryButton({ title, description, onClick }: Props) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const descriptionHeight = descriptionRef.current?.offsetHeight || 0;
    setMaxHeight(Math.max(descriptionHeight, 160)); // 最低高さを 160px に設定
  }, [description]);

  return (
    <div
      className="flex flex-wrap md:flex-nowrap items-center bg-[#f5f5f5] rounded-lg overflow-hidden cursor-pointer shadow-md"
      style={{ maxWidth: '95%', margin: '12px auto', padding: '4px' }} // 余白を削減
      onClick={onClick} // ボタンとしてクリックイベントを追加
    >
      <div
        className="bg-[#53c1b6] text-white flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        style={{
          flex: '0 0 clamp(120px, 20%, 180px)', // 横幅を少し大きく調整
          height: `${maxHeight}px`, // 高さを同期
          maxWidth: '180px', // 最大幅を制限
          padding: '0 2px', // 左右の padding を削減
        }}
      >
        <span className="text-base md:text-lg font-semibold">{title}</span> {/* フォントサイズを調整 */}
      </div>
      <div
        ref={descriptionRef}
        className="text-[#545454] flex items-center justify-center text-center flex-1 bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none"
        style={{
          lineHeight: '1.6',
          height: `${maxHeight}px`, // 高さを同期
          padding: '2px', // padding を削減
        }}
      >
        <span className="text-base md:text-lg">{description}</span> {/* フォントサイズを調整 */}
      </div>
    </div>
  );
}
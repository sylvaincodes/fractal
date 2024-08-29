import { Product, SubProduct } from "@/types";
import React, { useEffect, useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductStyles from "./ProductStyles";
import ProductIcons from "./ProductIcons";
import ProductShare from "./ProductShare";

export default function ProductDetails({
  product,
  className,
  setImages,
  active,
  setActive,
}: {
  product: Product;
  setImages: (value: string[]) => void;
  className?: string;
  active: number;
  setActive: (value: number) => void;
}) {
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState(product.subProducts[active].options);
  const [style, setStyle] = useState(product.subProducts[active].style);

  const styles = product.subProducts.map((item: SubProduct) => {
    return item.style;
  });

  const [option, setOption] = useState(
    product.subProducts[active].options[active]
  );

  const [optionActive, setOptionActive] = useState<number>(0);

  useEffect(() => {
    setOptions(product.subProducts[active].options);
  }, [active, product]);

  const getStock = () => {
    const stock: number = option.qty - option.sold;
    return stock;
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <ProductInfo product={product} option={option} />
      <ProductStyles
        style={style}
        styles={styles}
        setStyle={setStyle}
        setActive={setActive}
        setOption={setOption}
        setOptionActive={setOptionActive}
        setImages={setImages}
        getStock={getStock}
        option={option}
        options={options}
        optionActive={optionActive}
      />
      <ProductIcons
        loading={loading}
        setLoading={setLoading}
        product={product}
        active={active}
        option={option}
        optionActive={optionActive}
      />
      <ProductShare product={product} active={active} />
    </div>
  );
}

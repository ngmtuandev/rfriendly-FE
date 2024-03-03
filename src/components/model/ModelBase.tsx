"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Modal, Slider } from "antd";
import formatNumberToPrice from "@/helpers/formatNumberToPrice";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ModelBaseProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modelCurrent: string;
}

const ModelBase: React.FC<ModelBaseProps> = ({
  isModalOpen,
  setIsModalOpen,
  modelCurrent,
}) => {
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tu = parseInt(searchParams.get("tu") || "100000", 10);
    const den = parseInt(searchParams.get("den") || "1000000", 10);
    setMinPrice(tu);
    setMaxPrice(den);
  }, [searchParams]);

  const handleOk = () => {
    if (modelCurrent === "price") {
      const params = new URLSearchParams();
      searchParams.forEach((value, key) => {
        if (key !== "tu" && key !== "den") {
          params.append(key, value);
        }
      });
      params.append("tu", minPrice.toString());
      params.append("den", maxPrice.toString());
      router.push(pathname + "?" + params.toString());
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={
          <div className="w-[100%] flex justify-center pb-[8px] border-b-[1px]">
            {modelCurrent === "price" ? <span>Chọn Giá</span> : null}
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "#FFB40C" } }}
      >
        {modelCurrent === "price" ? (
          <div>
            <div className="text-color-yellow-main text-[18px] font-semibold">
              {`${formatNumberToPrice(minPrice)} - ${formatNumberToPrice(
                maxPrice
              )} VNĐ`}
            </div>
            <Slider
              range
              value={[minPrice, maxPrice]}
              min={10}
              max={10000000}
              onChange={([min, max]) => {
                setMinPrice(min);
                setMaxPrice(max);
              }}
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default ModelBase;

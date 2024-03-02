"use client";
import React, { useCallback, useState } from "react";
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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleOk = () => {
    if (modelCurrent === "price") {
      const queryString =
        createQueryString("tu", minPrice.toString()) +
        "&" +
        createQueryString("den", maxPrice.toString());

      router.push(pathname + "?" + queryString);
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
              defaultValue={[minPrice, maxPrice]}
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

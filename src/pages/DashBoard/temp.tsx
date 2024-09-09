import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useRerender } from "../../hooks/useRerender";
import MainLayout from "../../components/SIdeBar";

import axios from "axios";
import { apiURL } from "../../config/constanst";
import { useAppSelector } from "../../hooks/useRedux";
import { IRootState } from "../../redux";
import RevenueIcon from "../../assets/images/RevenueIcon.png";

interface IStatistic {
  productStatistics: {
    productsTotal: number;
    productsTotalByCategory: {
      category: string;
      total: number;
    };
  };
  transactionStatistics: {
    postSaleFeeStatistics: {
      average: number;
      min: number;
      max: number;
      total: number;
    };
    preSaleFeeStatistics: {
      total: number;
    };
    revenueStatistics: {
      average: number;
      min: number;
      max: number;
      total: number;
    };
  };
}

export default function DashBoard() {
  const [statisticData, setStatisticData] = useState<IStatistic | null>(null);
  const { user } = useAppSelector((state: IRootState) => state.auth);

  const getStatisticData = async () => {
    try {
      const res = await axios.get(`${apiURL}/statistics`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      if (res.data.success) {
        setStatisticData(res.data.data);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStatisticData();
  }, []);

  return (
    <MainLayout
      title="Tổng quan thông tin của sàn"
      content={
        true ? (
          <div className="flex flex-col gap-y-10 px-20">
            <div className="bg-white px-5 flex flex-col items-center  py-5 rounded-xl border border-gray-300 w-full">
              <p className="text-center text-2xl text-gray-500 font-bold mb-4">
                Thống kê doanh thu
              </p>
              <div className="w-full flex justify-center">
                <div className="grid grid-cols-4 gap-x-10">
                  <div className="shadow-lg drop-shadow-md rounded-xl w-[250px] h-[250px] p-4 border border-gray-100 hover:opacity-50 cursor-pointer">
                    <p className="text-green-500 font-bold text-lg text-right">
                      Tồng lợi nhuận của sàn (2024)
                    </p>
                    <div className="flex flex-col items-center my-2">
                      <img src={RevenueIcon} className="w-[110px] h-[110px]" />
                    </div>
                    <p className="text-xl font-bold text-gray-600 text-right">
                      400001$
                    </p>
                  </div>
                  <div className="shadow-lg drop-shadow-md rounded-xl w-[250px] h-[250px] p-4 border border-gray-100 hover:opacity-50 cursor-pointer">
                    <p className="text-green-500 font-bold text-lg text-right">
                      Tồng lợi nhuận của sàn (2024)
                    </p>
                    <div className="flex flex-col items-center my-2">
                      <img src={RevenueIcon} className="w-[110px] h-[110px]" />
                    </div>
                    <p className="text-xl font-bold text-gray-600 text-right">
                      400001$
                    </p>
                  </div>
                  <div className="shadow-lg drop-shadow-md rounded-xl w-[250px] h-[250px] p-4 border border-gray-100 hover:opacity-50 cursor-pointer">
                    <p className="text-green-500 font-bold text-lg text-right">
                      Tồng lợi nhuận của sàn (2024)
                    </p>
                    <div className="flex flex-col items-center my-2">
                      <img src={RevenueIcon} className="w-[110px] h-[110px]" />
                    </div>
                    <p className="text-xl font-bold text-gray-600 text-right">
                      400001$
                    </p>
                  </div>
                  <div className="shadow-lg drop-shadow-md rounded-xl w-[250px] h-[250px] p-4 border border-gray-100 hover:opacity-50 cursor-pointer">
                    <p className="text-green-500 font-bold text-lg text-right">
                      Tồng lợi nhuận của sàn (2024)
                    </p>
                    <div className="flex flex-col items-center my-2">
                      <img src={RevenueIcon} className="w-[110px] h-[110px]" />
                    </div>
                    <p className="text-xl font-bold text-gray-600 text-right">
                      400001$
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row gap-x-5 items-center grid grid-cols-2 w-full">
              <div className="bg-white px-10 py-5 rounded-xl shadow-lg drop-shadow-md">
                <p className="text-center text-xl text-gray-500 font-bold mb-2">
                  Thống kê sản phẩm
                </p>
              </div>
              <div className="bg-white px-10 py-5 rounded-xl shadow-lg drop-shadow-md">
                <p className="text-center text-xl text-gray-500 font-bold">
                  Số lượng sản phẩm đang có trên sàn theo từng hãng
                </p>
              </div>
            </div>
          </div>
        ) : null
      }
    />
  );
}

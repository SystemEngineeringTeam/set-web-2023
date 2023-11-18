"use client";

import { useEffect, useState } from "react";
import { css } from "@/styled-system/css";

type BatteryType = {
  level: number;
  charging: boolean;
  // eslint-disable-next-line no-unused-vars
  addEventListener: (event: string, listener: () => void) => void;
};

type NavigatorGetBattery = Navigator & {
  getBattery?: () => Promise<BatteryType>;
};

export default function Battery() {
  const [level, setLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean>(false);

  useEffect(() => {
    const nav = navigator as NavigatorGetBattery;
    if (nav.getBattery) {
      nav.getBattery().then((battery: BatteryType) => {
        setLevel(battery.level * 100);
        setIsCharging(battery.charging);
        battery.addEventListener("levelchange", () => {
          setLevel(battery.level * 100);
        });
        battery.addEventListener("chargingchange", () => {
          setIsCharging(battery.charging);
        });
      });
    } else {
      setLevel(46);
    }
  }, []);

  return (
    <div>
      {level && (
        <>
          <span>{Math.round(level)}%</span>
          <svg
            className={css({
              marginLeft: "3px",
              height: "15px",
              display: "inline",
              verticalAlign: "baseline",
              transform: "translateY(1.5px)",
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.68 15"
          >
            <path
              className={css({
                fill: "primary.100",
              })}
              d="M25.14,15H3.16c-1.74,0-3.16-1.42-3.16-3.16V3.16C0,1.42,1.42,0,3.16,0H25.14c1.74,0,3.16,1.42,3.16,3.16V11.84c0,1.74-1.42,3.16-3.16,3.16ZM3.16,1.42c-.96,0-1.74,.78-1.74,1.74V11.84c0,.96,.78,1.74,1.74,1.74H25.14c.96,0,1.74-.78,1.74-1.74V3.16c0-.96-.78-1.74-1.74-1.74H3.16Z"
            />
            <path
              className={css({
                fill: "primary.100",
              })}
              d="M29.72,4.64v5.62c1.14-.42,1.96-1.52,1.96-2.81s-.82-2.39-1.96-2.81Z"
            />
            <rect x="2.41" y="2.28" />

            <path
              className={css({
                fill: "primary.100",
              })}
              d="M29.72,4.67v5.62c1.14-.42,1.96-1.52,1.96-2.81s-.82-2.39-1.96-2.81Z"
            />
            <rect
              className={css({
                fill: "primary.100",
                height: "69%",
              })}
              style={{
                width: `${level * 0.74}%`,
              }}
              x="2.41"
              y="2.31"
            />
            <path
              className={css({
                fill: "primary.100",
              })}
              d="M10.78,13.61H3.16c-.96,0-1.74-.78-1.74-1.74V3.19c0-.96,.78-1.74,1.74-1.74H13.55L14.77,.03H3.16C1.42,.03,0,1.44,0,3.19V11.87c0,1.74,1.42,3.16,3.16,3.16h7.2l.42-1.42Z"
            />
            <path
              className={css({
                fill: "primary.100",
              })}
              d="M25.14,.03h-8l-.38,1.42h8.39c.96,0,1.74,.78,1.74,1.74V11.87c0,.96-.78,1.74-1.74,1.74H13.69l-1.21,1.42h12.66c1.74,0,3.16-1.42,3.16-3.16V3.19C28.3,1.44,26.88,.03,25.14,.03Z"
            />
            {isCharging && (
              <>
                <polygon
                  className={css({
                    fill: "primary.100",
                  })}
                  points="10.36 15.03 12.48 15.03 20.92 5.09 15.76 5.09 17.14 0 14.79 0 6.56 9.61 11.97 9.61 10.36 15.03"
                />
                <polygon
                  className={css({
                    fill: "primary.500",
                  })}
                  points="16.11 0 8.74 8.61 13.31 8.61 11.53 14.6 18.76 6.09 14.46 6.09 16.11 0"
                />
              </>
            )}
          </svg>
        </>
      )}
    </div>
  );
}

"use client";

import { TimerPhasesActionContext } from "@/app/timer/providers";
import { RUNNING_TIMER_PATH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SettingInputs = {
  workTime: number;
  breakTime: number;
  repeat: number;
};

function SettingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingInputs>();
  const router = useRouter();
  const handleTimerPhases = useContext(TimerPhasesActionContext);

  const onClick: SubmitHandler<SettingInputs> = ({
    workTime,
    breakTime,
    repeat,
  }) => {
    const timerPhases = Array.from({ length: Number(repeat) }, (_, i) => [
      { set: i, type: "work", time: workTime },
      { set: i, type: "break", time: breakTime },
    ]).flat();
    handleTimerPhases(timerPhases);
    router.push(RUNNING_TIMER_PATH);
  };

  return (
    <form className="flex flex-col">
      <label>집중 시간</label>
      <input
        type="number"
        {...register("workTime", { required: true, min: 1, max: 60 })}
        className=""
      />
      <label>휴식 시간</label>
      <input
        type="number"
        {...register("breakTime", { required: true, min: 1, max: 60 })}
        className=""
      />
      <label>반복 횟수</label>
      <input
        type="number"
        {...register("repeat", { required: true, min: 1, max: 99 })}
        className=""
      />
      <button type="submit" onClick={handleSubmit(onClick)}>
        시작하기
      </button>
    </form>
  );
}

export default SettingForm;

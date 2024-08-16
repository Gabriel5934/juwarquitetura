import { XMarkIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface Props {
  id: string;
  title: string;
  subtitle: string;
}

const LeadDialog = (props: Props) => {
  const schema = yup
    .object({
      email: yup.string().required(),
    })
    .required();

  const {
    register,
    // handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: { email: string }) =>
  //   console.log({ ...data, segment: props.id });

  useEffect(() => {
    yup.setLocale({
      string: { length: "Número inválido" },
    });
  }, []);

  return (
    <dialog id={props.id} className="modal ">
      <div className="modal-box bg-lightBase rounded-none">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="submit"
            onClick={() => reset()}
            title="fechar"
          >
            <XMarkIcon className="text-black" />
          </button>
        </form>
        <div className="vertStack py-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold uppercase">{props.title}</p>
            <p>{props.subtitle}</p>
          </div>
          <form method="dialog" className="vertStack">
            <label className="form-control w-full max-w-xs">
              <input
                {...register("email", {
                  onChange: (v: ChangeEvent<HTMLInputElement>) =>
                    setValue("email", v.target.value ?? ""),
                })}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.email?.message}
                </span>
              </div>
            </label>
            <button className="btn btn-primary uppercase" type="submit">
              enviar
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit" onClick={() => reset()}>
          fechar
        </button>
      </form>
    </dialog>
  );
};

export default LeadDialog;

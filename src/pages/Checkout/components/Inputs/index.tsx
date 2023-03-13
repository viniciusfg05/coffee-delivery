import { MapPin } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { ButtonStyled, ConteinerError, FormContainerStyled, FormError, HeaderFormStyled } from "./styles";

interface dataImputProps {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const inputFormSchema = z.object({
  address: z.object({
    cep: z
      .string()
      .min(8, { message: "CEP precisa conter no mínimo 8 caracteres" })
      .max(8, { message: "CEP Invalido" })
      .regex(/^[0-9]+$/, { message: "CEP precisa conter apenas número" }),
    endereco: z
      .string()
      .min(5, { message: "Endereço precisa conter no mínimo 5 caracteres" }),
    numero: z.string().min(1, { message: "No mínimo 1 caracteres"}),
    complemento: z.string(),
    bairro: z.string().min(3, { message: "Cidade precisa conter mínimo 3 caracteres" }),
    cidade: z.string().min(3, { message: "Cidade precisa conter mínimo 3 caracteres" }),
    uf: z.string().min(2, { message: "UF precisa conter mínimo 2 caracteres" })
  }),
});

type RegisterFormData = z.infer<typeof inputFormSchema>;

export function Inputs() {
  const { dataItemCard, setDataInputFunc } = useContext(CoffeeContext);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitSuccessful, isValid, isValidating },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(inputFormSchema),
  });

  function handleCreateAdress({address}: any) {
    setDataInputFunc(address);
    console.log(address)
  }
  console.log(isValid)
  console.log(isValidating)


  return (
    <FormContainerStyled>
      <HeaderFormStyled>
        <MapPin color="#C47F17" weight="fill" size={22} />
        <section>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </section>
      </HeaderFormStyled>

      <form onSubmit={handleSubmit(handleCreateAdress)}>
        <input type="number" placeholder="CEP" {...register("address.cep")} />

        <input
          type="text"
          placeholder="Endereço"
          {...register("address.endereco")}
        />

        <div id="numeroEComplemento">
          <input
            type="number"
            placeholder="Número"
            {...register("address.numero")}
          />
          <input
            type="text"
            id="complemento"
            placeholder="Complemento"
            {...register("address.complemento")}
          />
        </div>

        <div id="bairoCidadeUf">
          <input
            type="text"
            id="bairro"
            placeholder="Bairro"
            {...register("address.bairro")}
          />
          <input
            type="text"
            id="cidade"
            placeholder="Cidade"
            {...register("address.cidade")}
          />
          <input
            type="text"
            id="uf"
            placeholder="UF"
            {...register("address.uf")}
          />
        </div>

        { isValid &&
          <ConteinerError>
            { errors.address?.cep && <FormError>{errors.address?.cep?.message}</FormError> }
            { errors.address?.endereco && <FormError>{errors.address?.endereco?.message}</FormError> }
            { errors.address?.numero && <FormError>{errors.address?.numero?.message}</FormError> }
            { errors.address?.bairro && <FormError>{errors.address?.bairro?.message}</FormError> }
            { errors.address?.cidade && <FormError>{errors.address?.cidade?.message}</FormError> }
            { errors.address?.uf && <FormError>{errors.address?.uf?.message}</FormError> }
          </ConteinerError>
        }

        
        { !errors.address && <ButtonStyled type="submit">Gravar</ButtonStyled>}
        
      </form>
    </FormContainerStyled>
  );
}

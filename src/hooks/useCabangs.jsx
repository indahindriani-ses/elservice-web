import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCabangs,
  createCabang,
  updateCabang,
  deleteCabang,
} from "../api/service/cabangApi";

export const useCabangs = () => {
  const queryClient = useQueryClient();

  //get all cabang
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cabangs"],
    queryFn: async () => {
      const res = await getCabangs();
      // array response handling
      return Array.isArray(res.data) ? res.data : res.data?.data ?? [];
    },
  });

  //create barang
  const createCabangMutation = useMutation({
    mutationFn: createCabang,
    onSuccess: () => {
      queryClient.invalidateQueries(["cabangs"]);
    },
  });

  //update cabang
  const updateCabangMutation = useMutation({
    // mutationFn butuh argumen { id, data }
    mutationFn: ({ id, data }) => updateCabang(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["cabangs"]);
    },
  });

  //delete cabang
  const deleteCabangMutation = useMutation({
    // mutationFn butuh argumen id
    mutationFn: (id) => deleteCabang(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["cabangs"]);
    },
  });

  return {
    cabangs: data ?? [],
    isLoading,
    isError,
    error,
    createCabang: createCabangMutation.mutateAsync, // pakai async biar bisa pakai await
    updateCabang: updateCabangMutation.mutateAsync,
    deleteCabang: deleteCabangMutation.mutateAsync,
  };
};
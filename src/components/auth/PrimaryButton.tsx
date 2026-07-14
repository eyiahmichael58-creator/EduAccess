interface PrimaryButtonProps {

  children: React.ReactNode;

  loading?: boolean;

}


export default function PrimaryButton({

  children,

  loading = false

}: PrimaryButtonProps) {


  return (

    <button

      type="submit"

      disabled={loading}

      className="
        w-full
        h-14
        rounded-2xl
        bg-black
        text-white
        font-semibold
        transition
        hover:bg-gray-900
        disabled:opacity-50
      "

    >

      {
        loading
        ?
        "Creating account..."
        :
        children
      }

    </button>

  );

}
// my-demo-registry/components/balance-card.tsx
import { cn } from "@/lib/utils";

export function BalanceCard({
  amount,
  className,
}: {
  amount: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-6 border bg-white shadow-sm",
        "rounded-fintech", // Uses your global v4 variable for border-radius
        className,
      )}
    >
      <h3 className="text-sm font-medium text-gray-500">Available Balance</h3>
      <p
        className={cn(
          "text-3xl font-bold mt-2",
          amount >= 0 ? "text-fintech-success" : "text-red-500", // Uses your global v4 success color
        )}
      >
        ${amount.toFixed(2)}
      </p>
      <button className="mt-4 w-full bg-fintech-primary text-white py-2 rounded-fintech hover:opacity-90">
        Transfer Funds
      </button>
    </div>
  );
}

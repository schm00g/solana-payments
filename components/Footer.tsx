export default function Footer() {
  return (
    <footer className="flex w-full justify-center border-t-2 border-gray-900 py-12 h-10">
      <a
        href='https://solana.com/developers/payments'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by {" "}
        <span>Solana Payments</span>
      </a>
    </footer>
  )
}

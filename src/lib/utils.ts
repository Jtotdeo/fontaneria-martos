export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return phone.replace(/\s/g, "");
}

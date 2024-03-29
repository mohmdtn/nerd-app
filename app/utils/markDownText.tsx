export function markDownText(text: string) {
  let formattedText = text.replace(/```([^`]+)```/g, "<code>$1</code>");
  formattedText = formattedText.replace(/`([^`]+)`/g, "`<strong>$1</strong>`");

  return formattedText;
}

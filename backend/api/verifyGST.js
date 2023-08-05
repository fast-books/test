function calculateChecksum(gstin) {
  const charArray = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Step-1: Find "Place Value of Digit" and "Factor" of all Digits
  const factor = gstin.split('').map((digit, index) => (index % 2 === 0 ? 1 : 2));

  // Step-2: Calculate intermediate values for each digit
  const intermediateValues = gstin.split('').map((digit, index) => {
    const placeValue = charArray.indexOf(digit);
    const A = placeValue * factor[index];
    const quotient = Math.floor(Math.abs(A) / 36);
    const remainder = Math.abs(A) % 36;
    return quotient + remainder;
  });

  // Step-3: Calculate final S value and the checksum
  const S = intermediateValues.reduce((acc, val) => acc + val, 0);
  const Z = S % 36;
  const remainder = (36 - Z) % 36;
  const checksum = charArray[remainder];

  return checksum;
}

exports.verifyGST = function (req, res) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid GST ID' });
  }

  // Remove any leading/trailing whitespaces and convert to uppercase
  const gstID = id.trim().toUpperCase();

  if (gstID.length !== 15) {
    return res.json(["failed"]);
  }

  const providedChecksum = gstID[gstID.length - 1];
  const calculatedChecksum = calculateChecksum(gstID.slice(0, -1));

  const result = calculatedChecksum === providedChecksum ? "notfailed" : "failed";
  res.json([result]);
};
// Q7 - Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split on whitespace to count the words
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative terms without case sensitivity
const lowerFeedback = feedback.toLowerCase();
const hasNegativeFeedback = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

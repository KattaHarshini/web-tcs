document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
          {
    "question": "Check if a string is a palindrome.",
    "description": "Given a string, determine if it reads the same forwards and backward (ignoring case).",
    "hint": "Convert the string to lowercase and compare it with its reversed version.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Convert the input string to lowercase.</li>
            <li>Reverse the lowercase string.</li>
            <li>Compare the original lowercase string with the reversed lowercase string.</li>
        </ol>

        <pre><code>function isPalindromeString(s) {
            const lowerCaseS = s.toLowerCase();
            const reversedS = lowerCaseS.split('').reverse().join('');
            return lowerCaseS === reversedS;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(n)</p>
    `
  },
  {
    "question": "Count the number of occurrences of each character in a string.",
    "description": "Given a string, count how many times each character appears in it.",
    "hint": "Use a hash map (object in JavaScript) to store the character counts.",
    "answer": `
        <p><strong>Solution Approach (Hash Map):</strong></p>
        <ol>
            <li>Create an empty hash map.</li>
            <li>Iterate through the string.</li>
            <li>For each character, if it's already in the map, increment its count; otherwise, add it to the map with a count of 1.</li>
        </ol>

        <pre><code>function countCharacterOccurrences(s) {
            const charCounts = {};
            for (let char of s) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            return charCounts;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(k) (where k is the number of unique characters)</p>
    `
  },
  {
    "question": "Implement Merge Sort.",
    "description": "Implement the Merge Sort algorithm to sort an array of numbers in ascending order.",
    "hint": "Divide the array into halves, recursively sort each half, and then merge the sorted halves.",
    "answer": `
        <p><strong>Solution Approach (Recursive Merge Sort):</strong></p>
        <ol>
            <li>Base case: If the array has 0 or 1 element, it's already sorted.</li>
            <li>Divide the array into two halves.</li>
            <li>Recursively sort the left half.</li>
            <li>Recursively sort the right half.</li>
            <li>Merge the two sorted halves.</li>
        </ol>

        <pre><code>function mergeSort(arr) {
            if (arr.length <= 1) {
                return arr;
            }
            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);
            return merge(mergeSort(left), mergeSort(right));
        }

        function merge(left, right) {
            const result = [];
            let i = 0;
            let j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n)</p>
        <p><strong>Space Complexity:</strong> O(n)</p>
    `
  },
  {
    "question": "Implement Quick Sort.",
    "description": "Implement the Quick Sort algorithm to sort an array of numbers in ascending order.",
    "hint": "Pick a 'pivot' element, partition the array around the pivot, and recursively sort the sub-arrays.",
    "answer": `
        <p><strong>Solution Approach (Recursive Quick Sort):</strong></p>
        <ol>
            <li>Base case: If the array has 0 or 1 element, it's already sorted.</li>
            <li>Pick a pivot element.</li>
            <li>Partition the array such that elements less than the pivot are on the left and elements greater than the pivot are on the right.</li>
            <li>Recursively sort the left sub-array.</li>
            <li>Recursively sort the right sub-array.</li>
        </ol>

        <pre><code>function quickSort(arr) {
            if (arr.length <= 1) {
                return arr;
            }
            const pivot = arr[0];
            const left = [];
            const right = [];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return quickSort(left).concat(pivot, quickSort(right));
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n) on average, O(n^2) in the worst case</p>
        <p><strong>Space Complexity:</strong> O(log n) on average, O(n) in the worst case (due to recursion)</p>
    `
  },
  {
    "question": "Reverse the words in a given string.",
    "description": "Given a string, reverse the order of the words in it. For example, 'the sky is blue' should become 'blue is sky the'.",
    "hint": "Split the string by spaces, reverse the resulting array of words, and then join them back.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Split the string into an array of words using space as a delimiter.</li>
            <li>Reverse the order of elements in the array.</li>
            <li>Join the reversed array back into a string with spaces.</li>
        </ol>

        <pre><code>function reverseWordsInString(s) {
            return s.split(' ').reverse().join(' ');
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(n)</p>
    `
  },
  {
    "question": "Find the second largest element in an array.",
    "description": "Given an array of numbers, find and return the second largest element.",
    "hint": "Iterate through the array, keeping track of the largest and second largest elements.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Initialize <code>largest</code> and <code>secondLargest</code> to appropriate minimum values (e.g., negative infinity or the first element if handling edge cases).</li>
            <li>Iterate through the array.</li>
            <li>If the current element is greater than <code>largest</code>, update <code>secondLargest</code> to the current <code>largest</code> and <code>largest</code> to the current element.</li>
            <li>If the current element is greater than <code>secondLargest</code> but not equal to <code>largest</code>, update <code>secondLargest</code> to the current element.</li>
            <li>Handle edge cases like arrays with less than two elements.</li>
        </ol>

        <pre><code class="language-javascript">function findSecondLargest(arr) {
            if (arr.length < 2) {
                return undefined; // Or handle error
            }
            let largest = -Infinity;
            let secondLargest = -Infinity;
            for (let num of arr) {
                if (num > largest) {
                    secondLargest = largest;
                    largest = num;
                } else if (num > secondLargest && num !== largest) {
                    secondLargest = num;
                }
            }
            return secondLargest === -Infinity ? undefined : secondLargest;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
    `
  },
  {
    "question": "Reverse an array.",
    "description": "Given an array, reverse the order of its elements in-place.",
    "hint": "Use two pointers, one at the beginning and one at the end, and swap elements while they move towards the center.",
    "answer": `
        <p><strong>Solution Approach (Two Pointers):</strong></p>
        <ol>
            <li>Initialize a <code>left</code> pointer to 0 and a <code>right</code> pointer to the last index of the array.</li>
            <li>While <code>left < right</code>, swap the elements at <code>left</code> and <code>right</code> indices.</li>
            <li>Increment <code>left</code> and decrement <code>right</code>.</li>
        </ol>

        <pre><code class="language-javascript">function reverseArrayInPlace(arr) {
            let left = 0;
            let right = arr.length - 1;
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
            return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
    `
  },
  {
    "question": "Check if a string is a palindrome.",
    "description": "Given a string, determine if it reads the same forwards and backward (ignoring case).",
    "hint": "Convert the string to lowercase and compare it with its reversed version.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Convert the input string to lowercase.</li>
            <li>Reverse the lowercase string.</li>
            <li>Compare the original lowercase string with the reversed lowercase string.</li>
        </ol>

        <pre><code class="language-javascript">function isPalindromeString(s) {
            const lowerCaseS = s.toLowerCase();
            const reversedS = lowerCaseS.split('').reverse().join('');
            return lowerCaseS === reversedS;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(n)</p>
    `
  },
  {
    "question": "Find the factorial of a number using recursion.",
    "description": "Given a non-negative integer, calculate its factorial using a recursive function.",
    "hint": "The factorial of n is n * factorial(n-1), with the base case being factorial(0) = 1.",
    "answer": `
        <p><strong>Solution Approach (Recursive):</strong></p>
        <ol>
            <li>Base case: If <code>n</code> is 0, return 1.</li>
            <li>Recursive step: Otherwise, return <code>n * factorial(n - 1)</code>.</li>
            <li>Handle negative input if necessary.</li>
        </ol>

        <pre><code class="language-javascript">function factorialRecursive(n) {
            if (n < 0) {
                return "Factorial not defined for negative numbers";
            }
            if (n === 0) {
                return 1;
            }
            return n * factorialRecursive(n - 1);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(n) (due to the call stack)</p>
    `
  },
  {
    "question": "Generate Fibonacci sequence up to n terms.",
    "description": "Given a positive integer <code>n</code>, generate the first <code>n</code> numbers of the Fibonacci sequence.",
    "hint": "The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.",
    "answer": `
        <p><strong>Solution Approach (Iterative):</strong></p>
        <ol>
            <li>Initialize an array with the first two Fibonacci numbers: [0, 1].</li>
            <li>Iterate from 2 to <code>n-1</code>, calculating each subsequent Fibonacci number as the sum of the previous two and adding it to the array.</li>
            <li>Handle cases where <code>n</code> is 0, 1, or 2.</li>
        </ol>

        <pre><code class="language-javascript">function fibonacciSequence(n) {
            if (n <= 0) {
                return [];
            } else if (n === 1) {
                return [0];
            } else if (n === 2) {
                return [0, 1];
            }
            const fib = [0, 1];
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(n)</p>
    `
  },
  {
    "question": "Count the number of occurrences of each character in a string.",
    "description": "Given a string, count how many times each character appears in it.",
    "hint": "Use a hash map (object in JavaScript) to store the character counts.",
    "answer": `
        <p><strong>Solution Approach (Hash Map):</strong></p>
        <ol>
            <li>Create an empty hash map.</li>
            <li>Iterate through the string.</li>
            <li>For each character, if it's already in the map, increment its count; otherwise, add it to the map with a count of 1.</li>
        </ol>

        <pre><code class="language-javascript">function countCharacterOccurrences(s) {
            const charCounts = {};
            for (let char of s) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            return charCounts;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(k) (where k is the number of unique characters)</p>
    `
  },
  {
    "question": "Check if two strings are anagrams.",
    "description": "Given two strings, determine if one is an anagram of the other (contain the same characters with the same frequencies).",
    "hint": "One way is to sort both strings and compare them. Another is to count character frequencies.",
    "answer": `
        <p><strong>Solution Approach (Character Counting):</strong></p>
        <ol>
            <li>If the lengths of the strings are different, they cannot be anagrams.</li>
            <li>Create a frequency map for the first string.</li>
            <li>Iterate through the second string, decrementing the counts in the map.</li>
            <li>If all counts in the map are zero at the end, they are anagrams.</li>
        </ol>

        <pre><code class="language-javascript">function areAnagrams(s1, s2) {
            if (s1.length !== s2.length) {
                return false;
            }
            const charCount = {};
            for (let char of s1) {
                charCount[char] = (charCount[char] || 0) + 1;
            }
            for (let char of s2) {
                if (!charCount[char]) {
                    return false;
                }
                charCount[char]--;
            }
            for (let char in charCount) {
                if (charCount[char] !== 0) {
                    return false;
                }
            }
            return true;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(k) (where k is the number of unique characters)</p>
    `
  },
  {
    "question": "Implement Binary Search.",
    "description": "Given a sorted array and a target value, implement the binary search algorithm to find the index of the target.",
    "hint": "Maintain a search interval and repeatedly divide it in half.",
    "answer": `
        <p><strong>Solution Approach (Iterative):</strong></p>
        <ol>
            <li>Initialize <code>left</code> to 0 and <code>right</code> to the last index of the array.</li>
            <li>While <code>left <= right</code>, calculate the middle index.</li>
            <li>If the middle element equals the target, return the middle index.</li>
            <li>If the middle element is less than the target, update <code>left</code> to <code>mid + 1</code>.</li>
            <li>If the middle element is greater than the target, update <code>right</code> to <code>mid - 1</code>.</li>
            <li>If the target is not found, return -1.</li>
        </ol>

        <pre><code class="language-javascript">function binarySearch(arr, target) {
            let left = 0;
            let right = arr.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (arr[mid] === target) {
                    return mid;
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
    `
  },
   {
    "question": "Implement Bubble Sort.",
    "description": "Implement the Bubble Sort algorithm to sort an array of numbers in ascending order.",
    "hint": "Repeatedly iterate through the array, compare adjacent elements, and swap them if they are in the wrong order.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Iterate through the array <code>n-1</code> times (where <code>n</code> is the length of the array).</li>
            <li>In each iteration, iterate from the beginning to the <code>n-i-1</code> index.</li>
            <li>Compare adjacent elements. If the left element is greater than the right element, swap them.</li>
        </ol>

        <pre><code class="language-javascript">function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
    `
  },
  {
    "question": "Remove duplicates from a string.",
    "description": "Given a string, remove all duplicate characters while maintaining the original order of the remaining characters.",
    "hint": "Iterate through the string and use a Set or a frequency map to keep track of seen characters.",
    "answer": `
        <p><strong>Solution Approach (Using a Set):</strong></p>
        <ol>
            <li>Initialize an empty Set to store unique characters and an empty string for the result.</li>
            <li>Iterate through the input string.</li>
            <li>For each character, if it's not in the Set, add it to the Set and append it to the result string.</li>
        </ol>

        <pre><code class="language-javascript">function removeDuplicatesFromString(s) {
            const uniqueChars = new Set();
            let result = '';
            for (let char of s) {
                if (!uniqueChars.has(char)) {
                    uniqueChars.add(char);
                    result += char;
                }
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(k) (where k is the number of unique characters)</p>
    `
  },
  {
    "question": "Find the first non-repeating character in a string.",
    "description": "Given a string, find the first character that appears only once in it.",
    "hint": "Use a frequency map to count character occurrences, then iterate through the string again to find the first character with a count of 1.",
    "answer": `
        <p><strong>Solution Approach (Frequency Map):</strong></p>
        <ol>
            <li>Create a frequency map to store the count of each character.</li>
            <li>Iterate through the string to populate the frequency map.</li>
            <li>Iterate through the string again. For each character, check its count in the map. If the count is 1, return that character.</li>
            <li>If no non-repeating character is found, return a special value (e.g., null).</li>
        </ol>

        <pre><code class="language-javascript">function findFirstNonRepeatingCharacter(s) {
            const charCounts = {};
            for (let char of s) {
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            for (let char of s) {
                if (charCounts[char] === 1) {
                    return char;
                }
            }
            return null;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(k) (where k is the number of unique characters)</p>
    `
  },
  {
    "question": "Count vowels and consonants in a string.",
    "description": "Given a string, count the number of vowels and consonants present in it (ignoring case).",
    "hint": "Convert the string to lowercase and check each character against a set of vowels.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <ol>
            <li>Convert the input string to lowercase.</li>
            <li>Initialize <code>vowelCount</code> and <code>consonantCount</code> to 0.</li>
            <li>Iterate through the string.</li>
            <li>For each character, check if it's a vowel. If so, increment <code>vowelCount</code>.</li>
            <li>If it's an alphabet character and not a vowel, increment <code>consonantCount</code>.</li>
        </ol>

        <pre><code class="language-javascript">function countVowelsAndConsonants(s) {
            const lowerCaseS = s.toLowerCase();
            let vowelCount = 0;
            let consonantCount = 0;
            const vowels = 'aeiou';
            for (let char of lowerCaseS) {
                if (vowels.includes(char)) {
                    vowelCount++;
                } else if (char >= 'a' && char <= 'z') {
                    consonantCount++;
                }
            }
            return { vowels: vowelCount, consonants: consonantCount };
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
    `
  },
        {
  "question": "Why do you want to work for TCS?",
  "description": "This question aims to understand your motivation for choosing TCS and whether you've done your research about the company.",
  "hint": "Think about specific aspects of TCS that attract you, such as its reputation, work culture, opportunities for growth, specific projects, or its values. Avoid generic answers.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Alignment and Interest):</strong></p>
        <ol>
          <li><strong>Specific Aspects of TCS:</strong> Mention 2-3 specific reasons why TCS interests you. This could include:
            <ul>
              <li>TCS's reputation as a leading global IT services and consulting company.</li>
              <li>The opportunity to work on cutting-edge technologies or specific projects that align with your skills and interests.</li>
              <li>TCS's focus on innovation and learning.</li>
              <li>The company's work culture and values (if you know them - e.g., employee focus, integrity).</li>
              <li>Opportunities for career growth and development within the organization.</li>
            </ul>
          </li>
          <li><strong>Alignment with Your Goals:</strong> Explain how working at TCS aligns with your career aspirations and long-term goals.</li>
          <li><strong>Contribution:</strong> Briefly mention how you believe your skills and enthusiasm can contribute to TCS's success.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Research about TCS, Genuine interest, Alignment of your goals with TCS's opportunities, Enthusiasm to contribute, Specific reasons for choosing TCS.</p>
      `
},
{
  "question": "What are your strengths?",
  "description": "This question allows you to highlight the positive attributes and skills that make you a valuable candidate.",
  "hint": "Choose 2-3 strengths that are relevant to the job description and back them up with brief examples from your past experiences.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Relevant Skills and Examples):</strong></p>
        <ol>
          <li><strong>Identify Key Strengths:</strong> Select 2-3 strengths that are most relevant to the role you are applying for. Examples include:
            <ul>
              <li><strong>Problem-solving:</strong> The ability to analyze issues and find effective solutions.</li>
              <li><strong>Communication:</strong> Clear and effective verbal and written communication skills.</li>
              <li><strong>Teamwork:</strong> Ability to collaborate effectively with others to achieve a common goal.</li>
              <li><strong>Adaptability:</strong> Flexibility to adjust to new situations and changing priorities.</li>
              <li><strong>Learning Agility:</strong> Eagerness and ability to quickly learn new technologies and concepts.</li>
            </ul>
          </li>
          <li><strong>Provide Specific Examples:</strong> For each strength you mention, briefly describe a situation or experience where you demonstrated that strength. Use the STAR method (Situation, Task, Action, Result) concisely.</li>
          <li><strong>Relevance to the Role:</strong> Briefly explain how these strengths would be beneficial in the context of the specific role at TCS.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Relevance to the job, Concrete examples, Positive framing, Self-awareness of your capabilities.</p>
      `
},
{
  "question": "What are your weaknesses?",
  "description": "This question aims to assess your self-awareness and your commitment to personal and professional development.",
  "hint": "Choose a genuine weakness that is not critical to the role and demonstrate that you are actively working to improve it. Avoid cliché answers.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Self-Awareness and Improvement):</strong></p>
        <ol>
          <li><strong>Identify a Genuine Weakness:</strong> Select a real area where you could improve. Be honest but choose something that won't be perceived as a major drawback for the role. Examples include:
            <ul>
              <li>Sometimes I can get so focused on the details of a project that I might initially overlook the bigger picture (and then explain how you're working on improving your strategic thinking).</li>
              <li>Public speaking isn't my strongest area, but I've been actively participating in workshops and practicing to become more comfortable.</li>
              <li>I used to find it challenging to delegate tasks effectively, but I'm learning the importance of trust and empowering team members.</li>
            </ul>
          </li>
          <li><strong>Explain the Impact (Briefly):</strong> Briefly mention how this weakness has affected you in the past (without dwelling on negatives).</li>
          <li><strong>Focus on Improvement:</strong> The most important part is to describe the specific steps you are taking to address this weakness. This shows initiative and a growth mindset.</li>
          <li><strong>Positive Framing:</strong> Frame your answer in a way that shows you are proactive and committed to self-improvement.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Honesty, Self-awareness, Proactive approach to improvement, Focus on learning and growth, Choosing a non-critical weakness.</p>
      `
},
{
  "question": "Where do you see yourself in 5 years?",
  "description": "This question helps the interviewer understand your career aspirations and whether your goals align with the potential opportunities at TCS.",
  "hint": "Focus on your professional growth and development. Show ambition and a desire to contribute to a company like TCS over the long term.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Growth and Contribution):</strong></p>
        <ol>
          <li><strong>Initial Growth and Skill Development:</strong> Describe your aspirations for the initial years, focusing on learning new technologies, gaining experience in different projects, and developing your core skills within a company like TCS.</li>
          <li><strong>Taking on More Responsibility:</strong> Express your desire to take on more responsibility and contribute to team success in the mid-term. This could involve leading smaller teams or taking ownership of specific modules.</li>
          <li><strong>Long-Term Vision (Aligned with TCS):</strong> Align your long-term vision with the potential career paths at TCS. Mention your interest in becoming a valuable contributor to the organization's growth and potentially specializing in a specific area that interests you and aligns with TCS's business.</li>
          <li><strong>Commitment to the Company:</strong> Emphasize your desire to build a long-term career with a reputable organization like TCS, highlighting your loyalty and commitment to continuous learning and contribution.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Ambition, Focus on learning and growth, Alignment with TCS's potential, Long-term commitment, Realistic expectations.</p>
      `
},
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});
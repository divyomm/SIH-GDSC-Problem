import os
import difflib

def load_text_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def check_plagiarism(file1_path, database_folder):
    text1 = load_import os
import difflib

def load_text_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def check_plagiarism(file1_path, database_folder):
    text1 = load_text_file(file1_path)
    max_similarity = 0.0
    most_similar_file = None

    for root, _, files in os.walk(database_folder):
        for file2_name in files:
            file2_path = os.path.join(root, file2_name)
            if file1_path != file2_path:
                text2 = load_text_file(file2_path)
                lines1 = text1.split()
                lines2 = text2.split()
                similarity = difflib.SequenceMatcher(None, lines1, lines2).ratio()

                if similarity > max_similarity:
                    max_similarity = similarity
                    most_similar_file = file2_path

    return most_similar_file, max_similarity

if __name__ == "__main__":
    file1_path = "C:\\Users\\jaide\\OneDrive\\Documents\\g.txt"
    database_folder = "C:\\Users\\jaide\\OneDrive\\Documents\\database_folder"

    most_similar_file, similarity = check_plagiarism(file1_path, database_folder)
    percentage = f"{similarity:.2%}"

    if similarity >= 0.01:
        print(f"Most similar file: {most_similar_file}")
        print(f"Similarity: {percentage}")
    else:
        print("No plagiarism detected.")text_file(file1_path)
    max_similarity = 0.0
    most_similar_file = None

    for root, _, files in os.walk(database_folder):
        for file2_name in files:
            file2_path = os.path.join(root, file2_name)
            if file1_path != file2_path:
                text2 = load_text_file(file2_path)
                lines1 = text1.split()
                lines2 = text2.split()
                similarity = difflib.SequenceMatcher(None, lines1, lines2).ratio()

                if similarity > max_similarity:
                    max_similarity = similarity
                    most_similar_file = file2_path

    return most_similar_file, max_similarity

if __name__ == "__main__":
    file1_path = "C:\\Users\\jaide\\OneDrive\\Documents\\g.txt"
    database_folder = "C:\\Users\\jaide\\OneDrive\\Documents\\database_folder"

    most_similar_file, similarity = check_plagiarism(file1_path, database_folder)
    percentage = f"{similarity:.2%}"

    if similarity >= 0.01:
        print(f"Most similar file: {most_similar_file}")
        print(f"Similarity: {percentage}")
    else:
        print("No plagiarism detected.")
ALLOWED_EXTENSIONS = {"pdf", "docx"}

def validate_file(file_name: str, file_size: int) -> bool:
    extension = file_name.split(".")[-1].lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise ValueError("Invalid file format. Allowed: PDF, DOCX")
    if file_size > 5 * 1024 * 1024:  # 5 MB size limit
        raise ValueError("File size exceeds the 5MB limit.")
    return True

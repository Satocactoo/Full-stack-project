from fastapi import FastAPI

app = FastAPI(title="Asian Restaurant API")

# Тестовый эндпоинт для проверки работы
@app.get("/")
def read_root():
    return {"message": "Welcome to Asian Restaurant API!"}

# Пример эндпоинта для получения меню
@app.get("/menu")
def get_menu():
    return [
        {"id": 1, "name": "Рамен", "price": 3500},
        {"id": 2, "name": "Суши сет", "price": 8000},
    ]
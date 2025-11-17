# train_model.py
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# -----------------------------------------------------------
# 1. Load your cleaned dataset
# -----------------------------------------------------------
df = pd.read_csv("house_price_cleaned.csv")  
# Make sure this CSV contains columns:
# BHK_NO., SQUARE_FT, UNDER_CONSTRUCTION, RERA, READY_TO_MOVE, RESALE
# LATITUDE, LONGITUDE, city, seller_type, TARGET_PRICE (in lacs)

# -----------------------------------------------------------
# 2. One-hot Encoding (Cities + Seller Type)
# -----------------------------------------------------------

CITY_COLUMNS = [
    'Bangalore','Chennai','Ghaziabad','Jaipur','Kolkata',
    'Lalitpur','Maharashtra','Mumbai','Noida','Other','Pune'
]

SELLER_COLUMNS = ['Builder', 'Dealer', 'Owner']

# Create missing city/seller columns if not present
for col in CITY_COLUMNS + SELLER_COLUMNS:
    df[col] = 0

# Fill city columns
for i, row in df.iterrows():
    col = row["city"] if row["city"] in CITY_COLUMNS else "Other"
    df.at[i, col] = 1

# Fill seller type columns
for i, row in df.iterrows():
    col = row["seller_type"] if row["seller_type"] in SELLER_COLUMNS else "Owner"
    df.at[i, col] = 1

# -----------------------------------------------------------
# 3. Select Features
# -----------------------------------------------------------
FEATURE_COLUMNS = [
    'UNDER_CONSTRUCTION', 'RERA', 'BHK_NO.', 'SQUARE_FT', 'READY_TO_MOVE',
    'RESALE', 'LONGITUDE', 'LATITUDE',
] + CITY_COLUMNS + SELLER_COLUMNS

X = df[FEATURE_COLUMNS]
y = df["TARGET_PRICE"]   # Price in lacs

# -----------------------------------------------------------
# 4. Train-Test Split
# -----------------------------------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# -----------------------------------------------------------
# 5. Scaling
# -----------------------------------------------------------
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# -----------------------------------------------------------
# 6. Train Model
# -----------------------------------------------------------
model = GradientBoostingRegressor(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=4,
    random_state=42
)

model.fit(X_train_scaled, y_train)

# -----------------------------------------------------------
# 7. Evaluate Model
# -----------------------------------------------------------
preds = model.predict(X_test_scaled)
print("MAE:", mean_absolute_error(y_test, preds))
print("R²:", r2_score(y_test, preds))

# -----------------------------------------------------------
# 8. Save Model + Scaler
# -----------------------------------------------------------
joblib.dump(model, "house_price_model.pkl")
joblib.dump(scaler, "scaler.pkl")

print("\nModel and scaler saved successfully!")

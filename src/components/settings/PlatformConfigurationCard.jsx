import React, { useRef } from "react";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

function PlatformConfigurationCard({
  siteName,
  onSiteNameChange,
  logoFileName,
  onLogoFileNameChange,
  language,
  onLanguageChange,
  timeZone,
  onTimeZoneChange,
}) {
  const fileInputRef = useRef(null);

  const handleChooseLogoClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onLogoFileNameChange(file.name);
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">
        Platform Configuration
      </h3>

      <div className="space-y-5">
        {/* Site Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Site Name
          </label>
          <TextField
            fullWidth
            size="medium"
            value={siteName}
            onChange={(e) => onSiteNameChange(e.target.value)}
            placeholder="Enter site name"
            InputProps={{
              sx: {
                borderRadius: "16px",
                fontSize: "0.95rem",
                paddingY: "4px",
              },
            }}
          />
        </div>

        {/* Change Logo */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Change Logo
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="button"
              onClick={handleChooseLogoClick}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-2xl border border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              <ImageIcon
                sx={{ fontSize: 18 }}
                className="mr-2 text-neutral-500"
              />
              Choose File
            </button>
            <span className="text-sm text-neutral-600 truncate">
              {logoFileName}
            </span>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleLogoChange}
          />
        </div>

        {/* Default Language */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Default Language
          </label>
          <FormControl fullWidth size="small">
            <Select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: "16px",
                fontSize: "0.95rem",
                "& .MuiSelect-select": {
                  paddingY: "10px",
                },
              }}
            >
              <MenuItem value="en">
                <span className="mr-2 text-lg">🇬🇧</span> English
              </MenuItem>
              <MenuItem value="fr">
                <span className="mr-2 text-lg">🇫🇷</span> French
              </MenuItem>
              <MenuItem value="es">
                <span className="mr-2 text-lg">🇪🇸</span> Spanish
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Time Zone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Time Zone
          </label>
          <FormControl fullWidth size="small">
            <Select
              value={timeZone}
              onChange={(e) => onTimeZoneChange(e.target.value)}
              sx={{
                borderRadius: "16px",
                fontSize: "0.95rem",
                "& .MuiSelect-select": {
                  paddingY: "10px",
                },
              }}
            >
              <MenuItem value="utc-5">
                (UTC-05:00) Eastern Time (US &amp; Canada)
              </MenuItem>
              <MenuItem value="utc+1">
                (UTC+01:00) West Africa Time (Nigeria)
              </MenuItem>
              <MenuItem value="utc">
                (UTC+00:00) Coordinated Universal Time
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
}

export default PlatformConfigurationCard;

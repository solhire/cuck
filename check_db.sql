-- Check SiteMessage table content
SELECT * FROM "SiteMessage";

-- Check SiteImage table structure and content
SELECT * FROM "SiteImage";

-- Check table structure
SELECT 
    table_name, 
    column_name, 
    data_type 
FROM 
    information_schema.columns 
WHERE 
    table_schema = 'public' 
ORDER BY 
    table_name, 
    ordinal_position; 
#!/bin/bash
# Setup a new directory site from this template
# Usage: ./scripts/setup.sh "RoofCompare" "roofcompare.com" "Roofing"

set -e

NAME="${1:?Usage: setup.sh <SiteName> <domain> <industry>}"
DOMAIN="${2:?Usage: setup.sh <SiteName> <domain> <industry>}"
INDUSTRY="${3:?Usage: setup.sh <SiteName> <domain> <industry>}"

SLUG=$(echo "$INDUSTRY" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

echo "🏗️  Setting up $NAME ($DOMAIN) for $INDUSTRY..."

# Update site.config.ts
sed -i '' "s/name: 'DumpsterCompare'/name: '$NAME'/" site.config.ts
sed -i '' "s/domain: 'dumpstercompare.com'/domain: '$DOMAIN'/" site.config.ts
sed -i '' "s/tagline: '.*'/tagline: 'Compare $INDUSTRY Prices Near You'/" site.config.ts
sed -i '' "s/description: '.*'/description: 'Find and compare $INDUSTRY prices from trusted local providers.'/" site.config.ts
sed -i '' "s/contactEmail: '.*'/contactEmail: 'hello@$DOMAIN'/" site.config.ts
sed -i '' "s/singular: 'Dumpster Rental'/singular: '$INDUSTRY'/" site.config.ts
sed -i '' "s/plural: 'Dumpster Rentals'/plural: '${INDUSTRY}s'/" site.config.ts
sed -i '' "s/slug: 'dumpster-rental'/slug: '$SLUG'/" site.config.ts

# Clear example data
echo '[]' > data/companies.json

echo "✅ Done! Next steps:"
echo "  1. Edit site.config.ts to customize service options, theme, etc."
echo "  2. Run: pnpm run ingest  (to populate data)"
echo "  3. Run: pnpm dev"
echo ""
echo "  Deploy: vercel --prod"

import { PDFDocument, StandardFonts, degrees, grayscale, rgb } from 'pdf-lib'

export async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  let pgs = [];
  let cpgs = 0;
  pgs.push(pdfDoc.addPage());
  const { width, height } = pgs[cpgs].getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const layout = {
    'fontSize': { 'hdr1': 18, 'hdr2': 12, 'txt1': 12 },
    'pad': { 'left': 25, 'right': 25, 'top': 25, 'bottom': 25, 'hdrTop': 10, 'hdrBot': 10 },
    'line': { 'startX': 0, 'endX': 0, 'startY': 0, 'endY': 0 },
    'available': { 'w': 0, 'h': 0 },
    'cols': [{ 'w': 0, 'h': 0, 'padL': 10, 'padR': 10, 'padT': 10, 'padB': 10, 'fontSize': 12 },
    { 'w': 0, 'h': 0, 'padL': 10, 'padR': 10, 'padT': 10, 'padB': 10, 'fontSize': 12 }]
  }
  const setInitialParams = () => {
    layout.line.startX = layout.pad.left;
    layout.line.endX = width - layout.pad.right;
    layout.line.startY = height - layout.pad.top;
    layout.line.endY = layout.pad.bottom;
    layout.available.w = layout.line.endX - layout.line.startX;
  }
  const checkBounds = (offset = 0) => {
    if (layout.line.startY - offset <= 0) {
      cpgs++;
      pgs.push(pdfDoc.addPage());
      setInitialParams();
    }
  }
  const drawLine = () => {
    checkBounds();
    pgs[cpgs].drawLine({
      start: { x: layout.line.startX, y: layout.line.startY },
      end: { x: layout.line.endX, y: layout.line.startY },
      thickness: 0.1,
      color: rgb(0.8, 0.8, 0.8)
    })
  }
  const check_offsets = (wrappedTxt, fontSize, padB) => {
    let h = font.heightAtSize(fontSize);
    let count1 = multiLines(wrappedTxt);
    let count2 = newLines(wrappedTxt);
    return (h * (count1 + count2) + padB);
  }
  const adjustOffset = (wrappedTxt, fontSize, padB) => {
    let h = font.heightAtSize(fontSize);
    let count1 = multiLines(wrappedTxt);
    let count2 = newLines(wrappedTxt);
    count1 > 1 ? layout.line.startY -= h * (count1 + count2) : layout.line.startY -= 0;
    layout.line.startY -= padB;
  }
  const newLines = (txt) => {
    return Array.from(txt.matchAll(/\n/g)).length;
  }
  const multiLines = (txt) => {
    return Array.from(txt.matchAll(/.+/g)).length;
  }
  const addTableRow = (col1Txt, col2Txt) => {
    let col1TxtWrapped, col2TxtWrapped = '';
    let col1totalLines = 0;
    let col2totalLines = 0;
    layout.cols[0].w = 100;
    layout.cols[1].w = layout.available.w - layout.cols[0].w;
    layout.line.startY -= font.heightAtSize(layout.cols[0].fontSize) + layout.cols[0].padT;
    col1TxtWrapped = wrapText(col1Txt, layout.cols[0].w, font, layout.cols[0].fontSize);
    col1totalLines = newLines(col1TxtWrapped);
    if (Array.isArray(col2Txt)) {
      col2Txt.forEach((val, idx) => {
        col2Txt[idx] = wrapText(val, layout.cols[1].w, font, layout.cols[1].fontSize);
        let countLines = newLines(col2Txt[idx]);
        countLines > col2totalLines ? col2totalLines = countLines : col2totalLines = col2totalLines;
      });
      col2TxtWrapped = col2Txt.join('\n');
    } else {
      col2TxtWrapped = wrapText(col2Txt, layout.cols[1].w, font, layout.cols[1].fontSize);
    }
    col2totalLines = newLines(col2TxtWrapped);
    let yOffset = 0;
    let totalCols = 2;
    for (let i = 0; i < totalCols; i++) {
      let check = check_offsets(col2TxtWrapped, layout.cols[i].fontSize, layout.cols[i].padB);
      yOffset = check > yOffset ? check : yOffset;
    }
    checkBounds(yOffset);
    pgs[cpgs].drawText(col1TxtWrapped, {
      x: layout.line.startX + layout.cols[0].padL,
      y: layout.line.startY,
      size: layout.cols[0].fontSize,
      font: font,
      color: rgb(0, 0, 0),
    })
    pgs[cpgs].drawText(col2TxtWrapped, {
      x: layout.line.startX + layout.cols[0].w + layout.cols[1].padL,
      y: layout.line.startY,
      size: layout.cols[1].fontSize,
      font: font,
      color: rgb(0, 0, 0),
    })
    if (col1totalLines > col2totalLines) {
      adjustOffset(col1TxtWrapped, layout.cols[0].fontSize, layout.cols[0].padB);
    } else {
      adjustOffset(col2TxtWrapped, layout.cols[1].fontSize, layout.cols[1].padB);
    }
    drawLine();
  }
  setInitialParams();
  drawLine();
  layout.line.startY -= fontBold.heightAtSize(layout.fontSize.hdr1) + layout.pad.hdrTop;
  checkBounds();
  pgs[cpgs].drawText('Recipe 1'.toUpperCase(), {
    x: layout.line.startX + ((layout.available.w - fontBold.widthOfTextAtSize('Recipe 1'.toUpperCase(), layout.fontSize.hdr1)) / 2),
    y: layout.line.startY,
    size: layout.fontSize.hdr1,
    font: fontBold,
    color: rgb(0, 0, 0),
  })
  layout.line.startY -= layout.pad.hdrBot;
  drawLine();
  checkBounds();
  pgs[cpgs].drawRectangle({
    x: layout.line.startX,
    y: layout.line.startY - fontBold.heightAtSize(layout.fontSize.hdr2) - layout.pad.hdrTop * 2 - layout.pad.hdrTop * 2,
    width: layout.available.w,
    height: fontBold.heightAtSize(layout.fontSize.hdr2) + layout.pad.hdrTop * 4,
    color: rgb(0.95, 0.95, 0.95)
  })
  layout.line.startY -= fontBold.heightAtSize(layout.fontSize.hdr2) + layout.pad.hdrTop * 2;
  checkBounds();
  pgs[cpgs].drawText(recipe.name.toUpperCase(), {
    x: layout.line.startX + ((layout.available.w - fontBold.widthOfTextAtSize(recipe.name.toUpperCase(), layout.fontSize.hdr2)) / 2),
    y: layout.line.startY,
    size: layout.fontSize.hdr2,
    font: fontBold,
    color: rgb(0, 0, 0),
  })
  layout.line.startY -= layout.pad.hdrBot * 2;
  drawLine();
  addTableRow('description:'.toUpperCase(), recipe.briefdescription);
  addTableRow('cooking time:'.toUpperCase(), recipe.durationToCook + ' mins');
  addTableRow('rating:'.toUpperCase(), recipe.comments[0].rating + ' stars');
  addTableRow('equipments:'.toUpperCase(), recipe.shoppingList.equipment);
  addTableRow('ingredients:'.toUpperCase(), recipe.shoppingList.ingredients);
  addTableRow('instructions:'.toUpperCase(), recipe.instructions);
  addTableRow('nutrition:'.toUpperCase(), [`fat:${recipe.fat}`, `calories:${recipe.calories}`, `totalCarbs:${recipe.totalCarbs}`, `protein:${recipe.protein}`]);
  addTableRow('tags:'.toUpperCase(), recipe.tags);
  addTableRow('Public comments:'.toUpperCase(), recipe.comments.flatMap((obj, idx) => [`Comment by: ${obj.posterName}`, obj.comment]));
  const pdfBytes = await pdfDoc.save()
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  document.getElementById('pdf').src = pdfDataUri;
}

const wrapText = (text, width, font, fontSize) => {
  let result = '';
  let multiText = Array.from(text.matchAll(/[^\s]+/g));
  let len = multiText.length;
  for (let i = 1; i <= len; i++) {
    let txt = multiText.slice(0, i).join(' ');
    if (font.widthOfTextAtSize(txt, fontSize) > width) {
      i -= 1;
      txt = multiText.slice(0, i).join(' ');
      result += txt + '\n';
      multiText.splice(0, i);
      i = 1;
    }
  }
  return result += multiText.slice(0, len).join(' ');
}

export const recipe = {
  "videoURL": "https://players.brightcove.net/1033249144001/default_default/index.html?videoId=6309524117112",
  "imageURLs": "https://www.allrecipes.com/thmb/j2-Ap0TIT9W3ZkvjHGg2ptIL9qM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/618489-91c1274c3ace498f8f84da3ed17838cd.jpg",
  "name": "Baked Garlic Parmesan Chicken",
  "date": {
    "$timestamp": {
      "t": "",
      "i": ""
    }
  },
  "briefdescription": "Deliciously crispy and tender, these baked breaded chicken breasts flavored with garlic and Parmesan cheese are quick and easy to prepare for the tastiest chicken dish ever.  and tender, these baked breaded chicken breasts flavored with garlic and Parmesan cheese are quick and easy to prepare for the tastiest chicken dish Deliciously",
  "totalCarbs": 14,
  "fat": 11,
  "protein": 30,
  "calories": 281,
  "shoppingList": {
    "equipment": ["Oven", "Baking Dish", "Bowl"],
    "ingredients": [
      "2 tablespoons olive oil",
      "1 clove garlic, minced",
      "1 cup dry bread crumbs",
      "0.66666668653488 cup grated Parmesan cheese",
      "1 teaspoon dried basil leaves",
      "0.25 teaspoon ground black pepper",
      "6 skinless, boneless chicken breast halves"
    ]
  },
  "durationToCook": 45,
  "instructions": [
    "Preheat oven to 350 degrees F (175 degrees C).",
    "Lightly grease a 9x13 inch baking dish.",
    "In a bowl, blend the olive oil and garlic. ",
    "In a separate bowl, mix the bread crumbs, Parmesan cheese, basil, and pepper. ",
    "Dip each chicken breast in the oil mixture, then in the bread crumb mixture.",
    "Arrange the coated chicken breasts in the prepared baking dish, and top with any remaining bread crumb mixture.",
    "Bake 30 minutes in the preheated oven, or until chicken is no longer pink and juices run clear."],
  "comments": [
    {
      "posterName": "Jeanine",
      "comment": "To convert this recipe, or any recipe, to air fryer: Reduce the oven temperature by 25\u00b0 and reduce the time by approximately 20%. That would be 325\u00b0 and about 24 minutes (but the time is pretty relative as I rely on visual and my meat thermometer). Pause to flip for balanced crispness on all sides (I usually spray all sides with olive oil before I start with the air fryer). You also may want to pause occasionally to check degree of \u201cdoneness\u201d and/or measure temperature of cooked meat (165\u00b0 in the thickest part of the breast meat for chicken). There is very little that I use my oven to cook and convert literally Everything to air fryer.",
      "rating": "2"
    },
    {
      "posterName": "marydomaz",
      "comment": "This is just a really nice basic chicken recipe. I added some leftover cauliflower to it and used veg broth since that is what I had on hand. Also made very small dumplings in it. Good flavor and easy meal to make!",
      "rating": "1"
    },
    {
      "posterName": "FishingWidow",
      "comment": "This is basically how I make . . also add some dehydrated vegetables.Very good and easy. My husband loved it and his friend that had Covid loved it too.",
      "rating": "4"
    }
  ],
  "tags": ["Baked", "Garlic", "Chicken"]
}
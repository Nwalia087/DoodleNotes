import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initNotes = [
    {
      _id: "6671f0ad73be16b079ca7b00",
      user: "666f6164bb54f253baa7b2a6",
      title: "Grocery Shopping List",
      description:
        "Create a list of items needed for the upcoming week. Include essentials like fruits, vegetables, dairy products, grains, and any specific ingredients required for planned meals. Organize the list by sections (e.g., produce, dairy, pantry) to make the shopping trip efficient. Check the pantry and fridge beforehand to avoid duplicates.",
      tag: "general",
      date: "2024-06-18T20:40:13.387Z",
      __v: 0,
    },
    {
      _id: "6671f0dd73be16b079ca7b02",
      user: "666f6164bb54f253baa7b2a6",
      title: "Meeting with Client",
      description:
        "Prepare for the client meeting scheduled for Thursday at 10 AM. Review the client's recent activities and current projects. Prepare a presentation outlining the proposed solutions and how they align with the client's goals. Include time for questions and feedback. Ensure all necessary documents are printed and the presentation is loaded onto the laptop.",
      tag: "general",
      date: "2024-06-18T20:41:01.241Z",
      __v: 0,
    },
    {
      _id: "6671f10173be16b079ca7b04",
      user: "666f6164bb54f253baa7b2a6",
      title: "Workout Routine Plan",
      description:
        "Design a weekly workout plan to include a balanced mix of cardio, strength training, and flexibility exercises. Allocate specific days for each type of workout and include rest days to prevent overtraining. Set clear, achievable goals for each session to monitor progress. Incorporate activities you enjoy to stay motivated.",
      tag: "general",
      date: "2024-06-18T20:41:37.592Z",
      __v: 0,
    },
    {
      _id: "6671f11873be16b079ca7b06",
      user: "666f6164bb54f253baa7b2a6",
      title: "Weekend Getaway Ideas",
      description:
        "Brainstorm destinations and activities for a weekend getaway. Consider nearby locations that offer a mix of relaxation and adventure. Research accommodation options, local attractions, dining spots, and transportation. Take into account the budget and any special preferences. Create a rough itinerary to maximize the experience.",
      tag: "general",
      date: "2024-06-18T20:42:00.814Z",
      __v: 0,
    },
    {
      _id: "6671f13273be16b079ca7b08",
      user: "666f6164bb54f253baa7b2a6",
      title: "Home Office Setup",
      description:
        "Plan the layout and design of a productive home office space. Focus on ergonomic furniture, adequate lighting, and minimizing distractions. List essential equipment such as a comfortable chair, desk, computer, and storage solutions. Add personal touches like plants or artwork to create an inviting atmosphere.",
      tag: "general",
      date: "2024-06-18T20:42:26.831Z",
      __v: 0,
    },
    {
      _id: "6671fb8173be16b079ca7b0b",
      user: "666f6164bb54f253baa7b2a6",
      title: "Book Club Discussion",
      description:
        'Prepare for the upcoming book club discussion on "The Great Gatsby." Re-read key sections and take notes on significant themes, character developments, and symbolic elements. Develop a few discussion questions to engage the group. Consider the historical context and the author\'s intentions to deepen the analysis. Bring any supplementary materials, such as critical essays, to enhance the conversation.',
      tag: "general",
      date: "2024-06-18T21:26:25.776Z",
      __v: 0,
    },
    {
      _id: "6671fb9a73be16b079ca7b0d",
      user: "666f6164bb54f253baa7b2a6",
      title: "Garden Planting Schedule",
      description:
        "Outline a planting schedule for the garden. Research optimal planting times for chosen vegetables, herbs, and flowers. Plan the layout based on sunlight and water requirements. Include tasks like soil preparation, fertilization, and pest control. Track progress and growth to ensure a healthy and productive garden throughout the season.",
      tag: "general",
      date: "2024-06-18T21:26:50.604Z",
      __v: 0,
    },
    {
      _id: "6671fbab73be16b079ca7b0f",
      user: "666f6164bb54f253baa7b2a6",
      title: "Vacation Packing Checklist",
      description:
        "Create a detailed packing checklist for the upcoming vacation. Include clothing, toiletries, medications, travel documents, and any special items for planned activities. Consider the destination's climate and local customs when selecting outfits. Ensure all electronics and chargers are packed, and leave space for souvenirs. Double-check the list a day before departure to avoid last-minute stress.",
      tag: "general",
      date: "2024-06-18T21:27:07.110Z",
      __v: 0,
    },
  ];
  const initToken = "";
  const [notes, setNotes] = useState(initNotes);
  const [token, setToken] = useState(initToken);

  return <NoteContext.Provider value={{ notes, setNotes, token }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;

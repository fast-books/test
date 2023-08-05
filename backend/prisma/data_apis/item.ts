const item = [
    { id: 1, name: "1\" Kanaflex", description: "Kanaflex from the House of Dutron", alias: "25mm MD Green", unitId: 1, hsnId: 470, openingStock: 4000, openingValue: 40000, companyId: 2 },
    { id: 2, name: "2\" Kanaflex", description: "Kanaflex from the House of Dutron", alias: "50mm MD Green", unitId: 1, hsnId: 470, openingStock: 1200, openingValue: 180000, companyId: 2 },
    { id: 3, name: "3\" Kanaflex", description: "Kanaflex from the House of Dutron", alias: "75mm MD Green", unitId: 1, hsnId: 470, openingStock: 500, openingValue: 150000, companyId: 2 },
    { id: 4, name: "1\" Tirupati", description: "Very good quality Low price pipe", alias: "25mm Section Low price", unitId: 2, hsnId: 470, openingStock: 800, openingValue: 80000, companyId: 2 },
    { id: 5, name: "Tubing Pipe", description: "Very good quality Low price pipe", alias: "Garden Hose", unitId: 2, hsnId: 470, openingStock: 900, openingValue: 90000, companyId: 2 },
    { id: 6, name: "Motor 10HP 960 RPM CG Power Three Phase", description: "Cg Power from the house of Murugappa Goup", alias: "10HP6Pole", unitId: 3, hsnId: 1028, openingStock: 6, openingValue: 210000, companyId: 2 },
    { id: 7, name: "Motor 10HP 1440 RPM CG Power Three Phase", description: "Cg Power from the house of Murugappa Goup", alias: "10HP4 Pole", unitId: 3, hsnId: 1028, openingStock: 7, openingValue: 200000, companyId: 2 },
    { id: 8, name: "Motor 1HP 960 RPM CG Power Three Phase", description: "Cg Power from the house of Murugappa Goup", alias: "1 HP 6 Pole", unitId: 3, hsnId: 1028, openingStock: 2, openingValue: 25000, companyId: 2 },
    { id: 9, name: "Motor 1HP 1440 RPM CG Power Three Phase", description: "Cg Power from the house of Murugappa Goup", alias: "1 HP 4 Pole", unitId: 3, hsnId: 1028, openingStock: 2, openingValue: 24000, companyId: 2 },
    { id: 10, name: "Motor 1 HP single Phase", description: "Cg Power from the house of Murugappa Goup", alias: "1HP 1Phase ", unitId: 3, hsnId: 1028, openingStock: 2, openingValue: 10800, companyId: 2 },
    { id: 11, name: "2\" Tirupati", description: "Very good quality Low price pipe", alias: "50mm Section Low price", unitId: 2, hsnId: 470, openingStock: 500, openingValue: 25000, companyId: 2 },
    { id: 12, name: "3\" Tirupati", description: "Very good quality Low price pipe", alias: "75mm Section Low price", unitId: 2, hsnId: 470, openingStock: 300, openingValue: 15000, companyId: 2 },
    { id: 13, name: "1\" GI Pipe", description: "Galvanized Iron pipe", alias: "25mm GI Pipe", unitId: 1, hsnId: 832, openingStock: 1000, openingValue: 50000, companyId: 2 },
    { id: 14, name: "2\" GI Pipe", description: "Galvanized Iron pipe", alias: "50mm GI Pipe", unitId: 1, hsnId: 832, openingStock: 500, openingValue: 25000, companyId: 2 },
    { id: 15, name: "3\" GI Pipe", description: "Galvanized Iron pipe", alias: "75mm GI Pipe", unitId: 1, hsnId: 832, openingStock: 200, openingValue: 10000, companyId: 2 },
    { id: 16, name: "1\" CPVC Pipe", description: "Chlorinated Polyvinyl Chloride pipe", alias: "25mm CPVC Pipe", unitId: 1, hsnId: 470, openingStock: 800, openingValue: 40000, companyId: 2 },
    { id: 17, name: "2\" CPVC Pipe", description: "Chlorinated Polyvinyl Chloride pipe", alias: "50mm CPVC Pipe", unitId: 1, hsnId: 470, openingStock: 400, openingValue: 20000, companyId: 2 },
    { id: 18, name: "3\" CPVC Pipe", description: "Chlorinated Polyvinyl Chloride pipe", alias: "75mm CPVC Pipe", unitId: 1, hsnId: 470, openingStock: 200, openingValue: 10000, companyId: 2 },
    { id: 19, name: "1\" UPVC Pipe", description: "Unplasticized Polyvinyl Chloride pipe", alias: "25mm UPVC Pipe", unitId: 1, hsnId: 470, openingStock: 700, openingValue: 35000, companyId: 2 },
    { id: 20, name: "2\" UPVC Pipe", description: "Unplasticized Polyvinyl Chloride pipe", alias: "50mm UPVC Pipe", unitId: 1, hsnId: 470, openingStock: 350, openingValue: 17500, companyId: 2 },
    { id: 21, name: "1\" Elbow", description: "90 degree elbow", alias: "25mm Elbow", unitId: 1, hsnId: 470, openingStock: 100, openingValue: 5000, companyId: 2 },
    { id: 22, name: "1\" Tee", description: "Three way tee", alias: "25mm Tee", unitId: 1, hsnId: 470, openingStock: 50, openingValue: 2500, companyId: 2 },
    { id: 23, name: "1\" Reducer", description: "Reduces the size of the pipe from 1\" to 3/4\"", alias: "25mm Reducer", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 24, name: "1\" Union", description: "Allows the pipe to be easily disconnected and reconnected", alias: "25mm Union", unitId: 1, hsnId: 470, openingStock: 10, openingValue: 500, companyId: 2 },
    { id: 25, name: "1\" Coupling", description: "Connects two pipes of the same size", alias: "25mm Coupling", unitId: 1, hsnId: 470, openingStock: 100, openingValue: 5000, companyId: 2 },
    { id: 26, name: "1\" Nipple", description: "Short piece of pipe that is used to connect two other fittings", alias: "25mm Nipple", unitId: 1, hsnId: 470, openingStock: 50, openingValue: 2500, companyId: 2 },
    { id: 27, name: "1\" Plug", description: "Closes off the end of a pipe", alias: "25mm Plug", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 28, name: "1\" Bushing", description: "Makes the diameter of a pipe smaller", alias: "25mm Bushing", unitId: 1, hsnId: 470, openingStock: 10, openingValue: 500, companyId: 2 },
    { id: 29, name: "45 Degree Elbow", description: "45 degree elbow", alias: "45mm Elbow", unitId: 1, hsnId: 470, openingStock: 100, openingValue: 5000, companyId: 2 },
    { id: 30, name: "Cross", description: "Creates a cross in a pipe", alias: "45mm Cross", unitId: 1, hsnId: 470, openingStock: 50, openingValue: 2500, companyId: 2 },
    { id: 31, name: "45 Degree Tee", description: "45 degree tee", alias: "45mm Tee", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 32, name: "45 Degree Reducer", description: "Reduces the size of the pipe from 1\" to 3/4\"", alias: "45mm Reducer", unitId: 1, hsnId: 470, openingStock: 10, openingValue: 500, companyId: 2 },
    { id: 33, name: "45 Degree Union", description: "Allows the pipe to be easily disconnected and reconnected", alias: "45mm Union", unitId: 1, hsnId: 470, openingStock: 5, openingValue: 250, companyId: 2 },
    { id: 34, name: "45 Degree Coupling", description: "Connects two pipes of the same size", alias: "45mm Coupling", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 35, name: "45 Degree Nipple", description: "Short piece of pipe that is used to connect two other fittings", alias: "45mm Nipple", unitId: 1, hsnId: 470, openingStock: 10, openingValue: 500, companyId: 2 },
    { id: 36, name: "45 Degree Plug", description: "Closes off the end of a pipe", alias: "45mm Plug", unitId: 1, hsnId: 470, openingStock: 5, openingValue: 250, companyId: 2 },
    { id: 37, name: "45 Degree Bushing", description: "Makes the diameter of a pipe smaller", alias: "45mm Bushing", unitId: 1, hsnId: 470, openingStock: 2, openingValue: 100, companyId: 2 },
    { id: 38, name: "Ball Valve", description: "Allows fluid to flow in one direction only", alias: "Ball Valve", unitId: 1, hsnId: 470, openingStock: 100, openingValue: 5000, companyId: 2 },
    { id: 39, name: "Gate Valve", description: "Allows fluid to flow in both directions", alias: "Gate Valve", unitId: 1, hsnId: 470, openingStock: 50, openingValue: 2500, companyId: 2 },
    { id: 40, name: "Globe Valve", description: "Allows fluid to flow in both directions, but with more control than a gate valve", alias: "Globe Valve", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 41, name: "Socket Weld Fitting", description: "A type of fitting that is used to connect two pipes that have a socket welded end.", alias: "Socket Weld", unitId: 1, hsnId: 470, openingStock: 100, openingValue: 5000, companyId: 2 },
    { id: 42, name: "Threaded Fitting", description: "A type of fitting that has threads on both ends, which allows it to be screwed into another fitting or a pipe.", alias: "Threaded", unitId: 1, hsnId: 470, openingStock: 50, openingValue: 2500, companyId: 2 },
    { id: 43, name: "Compression Fitting", description: "A type of fitting that uses a compression ring to seal the connection between two pipes.", alias: "Compression", unitId: 1, hsnId: 470, openingStock: 25, openingValue: 1250, companyId: 2 },
    { id: 44, name: "Flange Fitting", description: "A type of fitting that has a flange on one or both ends, which allows it to be bolted to another fitting or a pipe.", alias: "Flange", unitId: 1, hsnId: 470, openingStock: 10, openingValue: 500, companyId: 2 },
    { id: 45, name: "Yoke Fitting", description: "A type of fitting that has a yoke on one end, which allows it to be connected to a valve or other device.", alias: "Yoke", unitId: 1, hsnId: 470, openingStock: 5, openingValue: 250, companyId: 2 },
    { id: 46, name: "Union Fitting", description: "A type of fitting that allows two pipes to be easily disconnected and reconnected.", alias: "Union", unitId: 1, hsnId: 470, openingStock: 2, openingValue: 100, companyId: 2 },
    { id: 47, name: "Hose Barb Fitting", description: "A type of fitting that has a hose barb on one end, which allows it to be connected to a hose.", alias: "Hose Barb", unitId: 1, hsnId: 470, openingStock: 1, openingValue: 50, companyId: 2 },
    { id: 48, name: "Slip-on Fitting", description: "A type of fitting that is slipped over a pipe and then welded in place.", alias: "Slip-on", unitId: 1, hsnId: 470, openingStock: 1, openingValue: 25, companyId: 2 },
    { id: 49, name: "Blind Flange", description: "A type of flange that is used to seal the end of a pipe.", alias: "Blind Flange", unitId: 1, hsnId: 470, openingStock: 1, openingValue: 10, companyId: 2 }






];

export default item;
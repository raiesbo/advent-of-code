use std::fs;

fn main() {
    _ex_2b();
}

fn read_file(file_path: &str) -> String {
    return fs::read_to_string(file_path).expect("Wrong file path");
}

fn _ex_2a() {
    let content: String = read_file("./src/2a-data");
    let max_red = 12;
    let max_green = 13;
    let max_blue = 14;
    let mut result = 0;
    for (i, round) in content.split("\n").enumerate() {
        let mut is_valid_round = true;
        let values_string = round.split(": ").nth(1).unwrap();
        for set in values_string.split("; ") {
            for cubes in set.split(", ") {
                let cube_num = cubes.split(" ").nth(0).unwrap().parse().unwrap();
                let cube_type = cubes.split(" ").nth(1).unwrap();
                if cube_type == "blue" && max_blue < cube_num
                    || cube_type == "green" && max_green < cube_num
                    || cube_type == "red" && max_red < cube_num
                {
                    is_valid_round = false;
                    break;
                }
            }
        }
        if is_valid_round {
            result += i + 1;
        }
    }
    println!("Result: {:?}", result);
}

fn _ex_2b() {
    let content: String = read_file("./src/2b-data");
    let mut result = 0;
    for round in content.split("\n") {
        let mut min_red = 1;
        let mut min_blue = 1;
        let mut min_green = 1;
        let values_string = round.split(": ").nth(1).unwrap();
        for set in values_string.split("; ") {
            for cubes in set.split(", ") {
                let cube_num = cubes.split(" ").nth(0).unwrap().parse().unwrap();
                let cube_type = cubes.split(" ").nth(1).unwrap();
                if cube_type == "blue" && min_blue < cube_num {
                    min_blue = cube_num
                }
                if cube_type == "green" && min_green < cube_num {
                    min_green = cube_num
                }
                if cube_type == "red" && min_red < cube_num {
                    min_red = cube_num
                }
            }
        }
        result += min_red * min_blue * min_green;
    }
    println!("Result: {:?}", result);
}

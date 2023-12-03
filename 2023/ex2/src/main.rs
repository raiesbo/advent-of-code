use std::fs;

fn main() {
    _ex_2a();
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

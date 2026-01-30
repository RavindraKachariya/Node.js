import Student from "../models/models.students.js";

export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            message: "Student created successfully",
            student,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getStudent = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getSingleStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student updated successfully",
            updatedStudent,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student deleted successfully",
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
